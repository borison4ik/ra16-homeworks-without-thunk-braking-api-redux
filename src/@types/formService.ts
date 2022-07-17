export interface EditServiseItem {
  id: number;
  name: string;
  price: number;
  content: string;
}

export interface IFormServiceState {
  service: EditServiseItem;
  conpleted: boolean;
  sending: boolean;
  loading: boolean;
  errorEdit: null | string;
}

export enum FormServiceActionTypes {
  FETCH_GET_SERVICE_REQUEST = 'FETCH_GET_SERVICE_REQUEST',
  FETCH_GET_SERVICE_SUCCES = 'FETCH_GET_SERVICE_SUCCES',
  FETCH_GET_SERVICE_ERROR = 'FETCH_GET_SERVICE_ERROR',

  FETCH_EDIT_SERVICE_REQUEST = 'FETCH_EDIT_SERVICE_REQUEST',
  FETCH_EDIT_SERVICE_SUCCES = 'FETCH_EDIT_SERVICE_SUCCES',
  FETCH_EDIT_SERVICE_ERROR = 'FETCH_EDIT_SERVICE_ERROR',

  EDIT_SERVICE_UNCOMPLETE = 'EDIT_SERVICE_UNCOMPLETE',
}

export interface IFetchGetServiceAction {
  type: FormServiceActionTypes.FETCH_GET_SERVICE_REQUEST;
}

export interface IFetchGetServiceSuccesAction {
  type: FormServiceActionTypes.FETCH_GET_SERVICE_SUCCES;
  payload: EditServiseItem;
}

export interface IFetchGetServiceErrorAction {
  type: FormServiceActionTypes.FETCH_GET_SERVICE_ERROR;
  payload: string;
}

export interface IFetchEditServiceAction {
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_REQUEST;
}

export interface IFetchEditServiceSuccesAction {
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_SUCCES;
}

export interface IFetchEditServiceErrorAction {
  type: FormServiceActionTypes.FETCH_EDIT_SERVICE_ERROR;
  payload: string;
}

export interface IEditServiceUncomplete {
  type: FormServiceActionTypes.EDIT_SERVICE_UNCOMPLETE;
  payload: boolean;
}

export type TFormServiceAction =
  | IFetchGetServiceAction
  | IFetchGetServiceSuccesAction
  | IFetchGetServiceErrorAction
  | IFetchEditServiceAction
  | IFetchEditServiceSuccesAction
  | IFetchEditServiceErrorAction
  | IEditServiceUncomplete;
