import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../features/employeeSlice';

export const store = configureStore({
  reducer: {
    listEmployee:employeeReducer,

  },
});
