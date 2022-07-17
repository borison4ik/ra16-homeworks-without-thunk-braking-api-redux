import { Dispatch } from 'redux';
import {
  EditServiseItem,
  FormServiceActionTypes,
  IEditServiceUncomplete,
  IFetchEditServiceAction,
  IFetchEditServiceErrorAction,
  IFetchEditServiceSuccesAction,
  IFetchGetServiceAction,
  IFetchGetServiceErrorAction,
  IFetchGetServiceSuccesAction,
} from '../../@types/formService';

export const fetchGetService = (): IFetchGetServiceAction => ({
  type: FormServiceActionTypes.FETCH_GET_SERVICE_REQUEST,
});

export const fetchGetServiceSucces = (
  payload: EditServiseItem,
): IFetchGetServiceSuccesAction => ({
  type: FormServiceActionTypes.FETCH_GET_SERVICE_SUCCES,
  payload,
});

export const fetchGetServiceError = (
  payload: string,
): IFetchGetServiceErrorAction => ({
  type: FormServiceActionTypes.FETCH_GET_SERVICE_ERROR,
  payload,
});

export const fetchEditService = (): IFetchEditServiceAction => ({
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_REQUEST,
});

export const fetchEditServiceSucces = (): IFetchEditServiceSuccesAction => ({
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_SUCCES,
});

export const fetchEditServiceError = (
  payload: string,
): IFetchEditServiceErrorAction => ({
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_ERROR,
  payload,
});

export const uncompleteService = (
  payload: boolean,
): IEditServiceUncomplete => ({
  type: FormServiceActionTypes.EDIT_SERVICE_UNCOMPLETE,
  payload,
});

export const getService = async (dispatch: Dispatch, id: number) => {
  dispatch(fetchGetService());
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVICES_API}/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchGetServiceSucces(data));
  } catch (err: any) {
    dispatch(fetchGetServiceError(err.message));
  }
};

export const editService = async (
  dispatch: Dispatch,
  serviceObject: EditServiseItem,
) => {
  dispatch(fetchEditService());
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVICES_API}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceObject),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(fetchEditServiceSucces());
  } catch (err: any) {
    dispatch(fetchEditServiceError(err.message));
  }
};
