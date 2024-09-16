import { createSlice } from '@reduxjs/toolkit';

const applicationSlice = createSlice({
  name: 'application',
  initialState: {
    selectedApplication: 'select application',
  },
  reducers: {
    setSelectedApplication: (state, action) => {
      state.selectedApplication = action.payload;
    },
  },
});

export const { setSelectedApplication } = applicationSlice.actions;

const displaySideBarSlice = createSlice({
  name: 'displaySideBar',
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggleSideBar: (state) => {
      state.isVisible = !state.isVisible;
    },
    setSideBarVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { toggleSideBar, setSideBarVisibility } = displaySideBarSlice.actions;

// export default displaySideBarSlice.reducer;
export const displaySideBarReducer = displaySideBarSlice.reducer;
export default applicationSlice.reducer;