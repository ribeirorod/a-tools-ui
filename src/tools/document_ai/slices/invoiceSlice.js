import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { processInvoices, reProcessInvoice, updateInvoiceHandler } from '../handlers/invoiceHandler';

export const updateInvoice = createAsyncThunk(
  'invoices/updateInvoice',
  async ({ updatedInvoice, index }, { getState }) => {
    const state = getState();
    const invoice = state.invoices.data[index];
    const updatedInvoices = [...state.invoices.data];
    updatedInvoices[index] = { ...invoice, invoice: updatedInvoice };
    await updateInvoiceHandler(updatedInvoices[index]);
    return updatedInvoices;
  }
);

export const reprocessInvoice = createAsyncThunk(
  'invoices/reprocessInvoice',
  async ({ data, applicationName, index }) => {
    const processedData = await reProcessInvoice(data, applicationName);
    return { processedData, index };
  }
);

export const processInvoice = createAsyncThunk(
  'invoices/processInvoices',
  async ({ files, applicationName }) => {
    const processedData = await processInvoices(files, applicationName);
    return processedData;
  }
);

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState: {
    data: [],
    isLoading: false,
    isProcessing:false,
    isReprocessing: [],
    isSubmitted: [],
  },
  reducers: {
    setInvoices: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateInvoice.pending, (state, action) => {
        const index = action.meta.arg.index;
        state.isSubmitted[index] = false;
      })
      .addCase(updateInvoice.fulfilled, (state, action) => {
        const index = action.meta.arg.index;
        state.isSubmitted[index] = true;
      })
      .addCase(updateInvoice.rejected, (state, action) => {
        const index = action.meta.arg.index;
        state.isSubmitted[index] = false;
      })
      .addCase(reprocessInvoice.pending, (state, action) => {
        const index = action.meta.arg.index;
        state.isReprocessing[index] = true;
      })
      .addCase(reprocessInvoice.fulfilled, (state, action) => {
        const { processedData, index } = action.payload;
        state.data[index] = processedData;
        state.isReprocessing[index] = false;
      })
      .addCase(reprocessInvoice.rejected, (state, action) => {
        const index = action.meta.arg.index;
        state.isReprocessing[index] = false;
      })
      .addCase(processInvoice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(processInvoice.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(processInvoice.rejected, (state) => {
        state.isLoading = false;
      });
},
});
export const { setInvoices, setLoading } = invoiceSlice.actions;
export default invoiceSlice.reducer;
