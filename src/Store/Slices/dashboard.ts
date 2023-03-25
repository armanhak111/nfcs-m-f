/* eslint-disable no-unused-vars */
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// import {  } from 'react';
import $api, { API_URL } from '../../Service/api/intercepter';
import { setCurrentUser } from './auth';
import { setErrorMessage } from './modal';

const initialState: IDashboardSliceState = {
  loading: false,
};

export const mainSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const changeName =
  (name: string, setCurretHeight: (arg: number) => void) => (dispatch: Dispatch) => {
    $api
      .put(`${API_URL}/change/name`, {
        name,
      })
      .then((response: AxiosResponse<any>) => {
        dispatch(setCurrentUser(response.data));
        setCurretHeight(0);
      })
      .catch((e: any) => {
        const errorMessage = e.response.data.message;
        if (errorMessage) {
          dispatch(setErrorMessage(e.response.data.message));
        } else {
          dispatch(setErrorMessage('modals.error.tryLater'));
        }
      });
  };
//
export const { setDashboardLoading } = mainSlice.actions;

export default mainSlice.reducer;
