import {
  IServicesState,
  ServicesActionTypes,
  TServiceAction,
} from '../../@types/services';

const initialState: IServicesState = {
  services: [],
  loading: false,
  error: null,
};

export const servicesReducer = (
  state = initialState,
  action: TServiceAction,
): IServicesState => {
  switch (action.type) {
    case ServicesActionTypes.FETCH_SERVICES_REQUEST:
      return { ...state, loading: true, error: null };
    case ServicesActionTypes.FETCH_SERVICES_SUCCES:
      return {
        ...state,
        loading: false,
        error: null,
        services: action.payload,
      };
    case ServicesActionTypes.FETCH_SERVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
