import { configureStore } from '@reduxjs/toolkit';
import applicationReducer, { displaySideBarReducer } from './slices/applicationSlice';
import invoiceReducer from './slices/invoiceSlice';

const da_store = configureStore({
  reducer: {
    invoices: invoiceReducer,
    application: applicationReducer,
    displaySideBar: displaySideBarReducer,
  },
});

export default da_store;