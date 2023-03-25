import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { API_URL } from '../../Service/api/intercepter';
import { setErrorMessage, setModal } from './modal';

const initialState: IMainSliceState = {
  locale: 'en',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLocale: (state, action) => {
      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

export const contactUs =
  (values: Record<string, string>, resetForm: any) => (dispatch: Dispatch) => {
    axios
      .post(`${API_URL}/contact`, values)
      .then(async (response: AxiosResponse<any>) => {
        if (response) {
          dispatch(setModal('contact-success-modal'));
          resetForm();
        }
      })
      .catch((e) => {
        const errorMessage = e.response.data.message;
        if (errorMessage) {
          dispatch(setErrorMessage(e.response.data.message));
        } else {
          dispatch(setErrorMessage('modals.error.tryLater'));
        }
      });
  };

export const { setLocale } = mainSlice.actions;

export default mainSlice.reducer;
