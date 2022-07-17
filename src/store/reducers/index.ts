import { combineReducers } from 'redux';
import { formServiceReducer } from './formServiceReducer';
import { servicesReducer } from './servicesReducer';

export const rootReducer = combineReducers({
  services: servicesReducer,
  formService: formServiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
