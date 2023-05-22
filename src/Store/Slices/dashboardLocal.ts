import { createSlice } from '@reduxjs/toolkit';

const initialState: IDashboardLocalSlice = {
  currentSlide: 'forecastList',
};

export const dashboardLocalSlice = createSlice({
  name: 'dashboardLocl',
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      return {
        ...state,
        currentSlide: action.payload,
      };
    },
  },
});

export const { setCurrentSlide } = dashboardLocalSlice.actions;

export default dashboardLocalSlice.reducer;
