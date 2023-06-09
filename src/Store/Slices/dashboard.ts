/* eslint-disable no-unused-vars */
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

// import {  } from 'react';
import $api, { API_URL } from '../../Service/api/intercepter';
import { setCurrentUser, setLoadAra } from './auth';
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
  (name: string, id: string, setCurretHeight: (arg: number) => void) => (dispatch: Dispatch) => {
    dispatch(setLoadAra(true));
    $api
      .put(`${API_URL}/change/name`, {
        name,
        id,
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
      })
      .finally(() => {
        dispatch(setLoadAra(false));
      });
  };
export const changePasswordSettings =
  (old: string, newPas: string, id: string, setCurretHeight: (arg: number) => void) =>
  (dispatch: Dispatch) => {
    dispatch(setLoadAra(true));
    $api
      .post(`${API_URL}/changepassword`, {
        old,
        newPas,
        id,
      })
      .then((response: AxiosResponse<any>) => {
        if (response) {
          dispatch(setCurrentUser(response.data));

          setCurretHeight(0);
        }
      })
      .catch((e: any) => {
        const errorMessage = e.response.data.message;
        if (errorMessage) {
          dispatch(setErrorMessage(e.response.data.message));
        } else {
          dispatch(setErrorMessage('modals.error.tryLater'));
        }
      })
      .finally(() => {
        dispatch(setLoadAra(false));
      });
  };
export const { setDashboardLoading } = mainSlice.actions;

export default mainSlice.reducer;
