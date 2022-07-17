export interface IServiceItem {
  id: number;
  name: string;
  price: number;
  content?: string;
}

export interface IServicesState {
  services: IServiceItem[];
  loading: boolean;
  error: null | string;
}

export enum ServicesActionTypes {
  FETCH_SERVICES_REQUEST = 'FETCH_SERVICES_REQUEST',
  FETCH_SERVICES_SUCCES = 'FETCH_SERVICES_SUCCES',
  FETCH_SERVICES_ERROR = 'FETCH_SERVICES_ERROR',

  REMOVE_SERVICE = 'REMOVE_SERVICE',
}

// async
export interface IFetchServicesAction {
  type: ServicesActionTypes.FETCH_SERVICES_REQUEST;
}

export interface IFetchServicesSuccesAction {
  type: ServicesActionTypes.FETCH_SERVICES_SUCCES;
  payload: IServiceItem[];
}

export interface IFetchServicesErrorAction {
  type: ServicesActionTypes.FETCH_SERVICES_ERROR;
  payload: string;
}

// sync
export interface IRemoveServiceAction {
  type: ServicesActionTypes.REMOVE_SERVICE;
  payload: number;
}

export type TServiceAction =
  | IFetchServicesAction
  | IFetchServicesSuccesAction
  | IFetchServicesErrorAction
  | IRemoveServiceAction;
