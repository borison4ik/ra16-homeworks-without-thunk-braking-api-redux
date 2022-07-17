import {
  FormServiceActionTypes,
  IFormServiceState,
  TFormServiceAction,
} from '../../@types/formService';

const initialState: IFormServiceState = {
  service: {
    id: 0,
    name: '',
    price: 0,
    content: '',
  },
  conpleted: false,
  loading: false,
  sending: false,
  errorEdit: null,
};

export const formServiceReducer = (
  state = initialState,
  action: TFormServiceAction,
): IFormServiceState => {
  switch (action.type) {
    case FormServiceActionTypes.FETCH_GET_SERVICE_REQUEST:
      return { ...state, loading: true };
    case FormServiceActionTypes.FETCH_GET_SERVICE_SUCCES:
      return {
        ...state,
        loading: false,
        errorEdit: null,
        sending: false,
        service: action.payload,
      };
    case FormServiceActionTypes.FETCH_GET_SERVICE_ERROR:
      return {
        ...state,
        loading: false,
        sending: false,
        errorEdit: action.payload,
      };
    case FormServiceActionTypes.FETCH_EDIT_SERVICE_REQUEST:
      return {
        ...state,
        sending: true,
      };
    case FormServiceActionTypes.FETCH_EDIT_SERVICE_SUCCES:
      return {
        ...state,
        sending: false,
        errorEdit: null,
        conpleted: true,
      };
    case FormServiceActionTypes.FETCH_EDIT_SERVICE_ERROR:
      return {
        ...state,
        sending: false,
        conpleted: false,
        errorEdit: action.payload,
      };

    case FormServiceActionTypes.EDIT_SERVICE_UNCOMPLETE:
      return {
        ...state,
        conpleted: action.payload,
      };
    default:
      return state;
  }
};
