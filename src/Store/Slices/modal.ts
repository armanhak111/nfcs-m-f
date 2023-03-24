import { createSlice } from '@reduxjs/toolkit';

const initialState: IModalSliceState = {
  modal: '',
  errorMessage: '',
  actionModal: '',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action) => {
      return {
        ...state,
        modal: action.payload,
      };
    },
    setErrorMessage: (state, action) => {
      return {
        ...state,
        errorMessage: action.payload,
      };
    },
    setActionModal: (state, action: any) => {
      return {
        ...state,
        actionModal: action.payload,
      };
    },
  },
});

export const { setModal, setErrorMessage, setActionModal } = modalSlice.actions;

export default modalSlice.reducer;
