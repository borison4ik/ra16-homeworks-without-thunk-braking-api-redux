import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Empty, List, Spin } from 'antd';

import { fetchServices } from '../../store/action-creators/services';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { ServiceItem } from '../ServiceItem';

import './index.scss';

export const ServicesList: React.FC = () => {
  const { services, loading, error } = useTypedSelector(
    (state) => state.services,
  );
  const dispatch = useDispatch();

  const closeAlertHandler = () => {
    fetchServices(dispatch);
  };
  console.log('rerender');
  useEffect(() => {
    fetchServices(dispatch);
  }, [dispatch]);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return (
      <Alert
        message='Error, something was going wrong'
        description={error}
        type='error'
        closable
        showIcon
        onClose={closeAlertHandler}
      />
    );
  }

  if (!services.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <List className='servises-list' itemLayout='horizontal'>
      {services.map((service) => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </List>
  );
};
