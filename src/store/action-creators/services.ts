import { Dispatch } from 'redux';
import {
  IFetchServicesAction,
  IFetchServicesErrorAction,
  IFetchServicesSuccesAction,
  IServiceItem,
  ServicesActionTypes,
} from '../../@types/services';

export const fetchServicesRequest = (): IFetchServicesAction => ({
  type: ServicesActionTypes.FETCH_SERVICES_REQUEST,
});

export const fetchServicesSucces = (
  payload: IServiceItem[],
): IFetchServicesSuccesAction => ({
  type: ServicesActionTypes.FETCH_SERVICES_SUCCES,
  payload,
});

export const fetchServicesError = (
  payload: string,
): IFetchServicesErrorAction => ({
  type: ServicesActionTypes.FETCH_SERVICES_ERROR,
  payload,
});

export const fetchServices = async (dispatch: Dispatch) => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVICES_API}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchServicesSucces(data));
  } catch (err: any) {
    dispatch(fetchServicesError(err.message));
  }
};
