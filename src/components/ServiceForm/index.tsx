import { Alert, Button, Form, Input, Space, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditServiseItem } from '../../@types/formService';
import { pathRoutes } from '../../Routes';
import {
  editService,
  getService,
  uncompleteService,
} from '../../store/action-creators/formService';

import { useTypedSelector } from '../hooks/useTypedSelector';

export const ServiceForm: React.FC = () => {
  const { service, loading, sending, errorEdit, conpleted } = useTypedSelector(
    (state) => state.formService,
  );
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (params && params.id) {
      getService(dispatch, Number.parseInt(params.id));
    }
  }, [params, dispatch]);

  useEffect(() => {
    form.setFieldsValue({
      name: service.name,
      price: service.price,
      content: service.content,
    });
  }, [service, form]);

  useEffect(() => {
    if (conpleted) {
      navigate(pathRoutes.ROUTE_SERVICES);
      dispatch(uncompleteService(false));
    }
  }, [conpleted, navigate, dispatch]);

  const onFinish = (values: any) => {
    if (params && params.id) {
      const serviceObject: EditServiseItem = {
        id: Number.parseInt(params.id),
        name: values.name,
        price: Number.parseInt(values.price),
        content: values.content,
      };

      editService(dispatch, serviceObject);
    }
  };

  const closeAlertHandler = () => {
    if (params && params.id) {
      getService(dispatch, Number.parseInt(params.id));
    }
  };

  const cancelHandler = () => {
    navigate(-1);
  };

  if (loading) {
    return <Spin />;
  }

  if (errorEdit) {
    return (
      <Alert
        message='Error, something was going wrong'
        description={errorEdit}
        type='error'
        closable
        showIcon
        onClose={closeAlertHandler}
      />
    );
  }

  return (
    <Form
      form={form}
      disabled={sending}
      layout='vertical'
      name='service'
      initialValues={{ name: 'name', price: 'price', content: 'content' }}
      onFinish={onFinish}
      autoComplete='off'>
      <Form.Item
        label='Service name'
        name='name'
        rules={[{ required: true, message: 'Please input Service name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Price'
        name='price'
        rules={[{ required: true, message: 'Please input Price!' }]}>
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label='Content'
        name='content'
        rules={[{ required: true, message: 'Please input Content!' }]}>
        <Input />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button onClick={cancelHandler}>Cancel</Button>
          <Button type='primary' htmlType='submit' loading={sending}>
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
