import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axios from 'axios';

import { ROUTES } from '../../Constants/Routes';
import $api, { $refreshApi, API_URL } from '../../Service/api/intercepter';
import { AuthResponse } from '../../Service/api/types';
import { setDashboardLoading } from './dashboard';
import { setErrorMessage, setModal } from './modal';

interface IAuthUserResponse extends AuthResponse {
  user: IUser;
}
const initialState: IAuthSlice = {
  isAuthenticated: false,
  authLoader: false,
  currentUser: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    },
    setAuthLoader: (state, action) => {
      return {
        ...state,
        authLoader: action.payload,
      };
    },
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});
export const registration =
  (email: string, password: string, history: any) => (dispatch: Dispatch) => {
    dispatch(setAuthLoader(true));
    $api
      .post('/registration', {
        email,
        password,
      })
      .then(async (response: AxiosResponse<IAuthUserResponse>) => {
        if (response) {
          await localStorage.setItem('token', response.data.accessToken);
          await localStorage.setItem('refresh', response.data.refreshToken);
          dispatch(setCurrentUser(response.data.user));
          dispatch(setAuth(true));
          dispatch(setAuthLoader(false));
          history.push(ROUTES.DASHBOARD);
        }
      })
      .catch((e) => {
        const errorMessage = e.response.data.message;
        if (errorMessage) {
          dispatch(setErrorMessage(e.response.data.message));
        } else {
          dispatch(setErrorMessage('modals.error.tryLater'));
        }
      })
      .finally(() => {
        dispatch(setAuthLoader(false));
      });
  };

export const signIn = (email: string, password: string, history: any) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .post('/login', {
      email,
      password,
    })
    .then(async (response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        await localStorage.setItem('token', response.data.accessToken);
        await localStorage.setItem('refresh', response.data.refreshToken);
        await localStorage.setItem('id', response.data.user.id);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
        history.push(ROUTES.DASHBOARD);
      }
    })
    .catch((e) => {
      const errorMessage = e.response.data.message;
      if (errorMessage) {
        dispatch(setErrorMessage(e.response.data.message));
      } else {
        dispatch(setErrorMessage('modals.error.tryLater'));
      }
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};

export const getUser = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .get('/user')
    .then(async (response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        dispatch(setCurrentUser(response.data));
      }
    })
    .catch((e) => {
      const errorMessage = e.response.data.message;
      if (errorMessage) {
        dispatch(setErrorMessage(e.response.data.message));
      } else {
        dispatch(setErrorMessage('modals.error.tryLater'));
      }
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch(setDashboardLoading(true));
  $api
    .post('/logout')
    .then(async (response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        await localStorage.removeItem('token');
        await localStorage.removeItem('refresh');
        dispatch(setAuth(false));
        dispatch(setCurrentUser({}));
        dispatch(setDashboardLoading(false));
      }
    })
    .catch(async () => {
      await localStorage.removeItem('token');
      await localStorage.removeItem('refresh');
    })
    .finally(() => {
      dispatch(setDashboardLoading(false));
    });
};

export const users = (id: string) => (dispatch: Dispatch) => {
  dispatch(setDashboardLoading(true));
  $api
    .get(`/user/${id}`)
    .then((response: AxiosResponse<IAuthUserResponse>) => {
      dispatch(setCurrentUser(response.data.user));
    })
    .finally(() => {
      dispatch(setDashboardLoading(false));
    });
};

export const checkAuth = (history: any) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $refreshApi
    .get(`${API_URL}/refresh`, { withCredentials: true })
    .then(async (response: AxiosResponse<any>) => {
      if (response) {
        await localStorage.setItem('token', response.data.accessToken);
        await localStorage.setItem('refresh', response.data.refreshToken);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      history.push(ROUTES.SIGN_IN);
      console.log(e);
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};
export const forgotPassword = (email: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  axios
    .post(`${API_URL}/resetpasslink`, {
      email,
    })
    .then(async (response: AxiosResponse<any>) => {
      if (response) {
        dispatch(setModal('forgot-password-success'));
      }
    })
    .catch((e) => {
      dispatch(setAuthLoader(false));
      const errorMessage = e.response.data.message;
      if (errorMessage) {
        dispatch(setErrorMessage(e.response.data.message));
      } else {
        dispatch(setErrorMessage('modals.error.tryLater'));
      }
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};

export const resetPassword = (password: string, resetLink: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  axios
    .post(`${API_URL}/resetpassword`, {
      password,
      resetLink,
    })
    .then(async (response: AxiosResponse<any>) => {
      if (response) {
        dispatch(setModal('reset-password-success'));
      }
    })
    .catch((e) => {
      dispatch(setAuthLoader(false));
      const errorMessage = e.response.data.message;
      if (errorMessage) {
        dispatch(setErrorMessage(e.response.data.message));
      } else {
        dispatch(setErrorMessage('modals.error.tryLater'));
      }
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};

export const changePassword =
  (password: string, newPassword: string, email: string) => (dispatch: Dispatch) => {
    dispatch(setAuthLoader(true));
    axios
      .post(`${API_URL}/changepassword`, {
        password,
        newPassword,
        email,
      })
      .then(async (response: AxiosResponse<any>) => {
        if (response) {
          dispatch(setModal('change-password'));
        }
      })
      .catch((e) => {
        dispatch(setAuthLoader(false));
        const errorMessage = e.response.data.message;
        if (errorMessage) {
          dispatch(setErrorMessage(e.response.data.message));
        } else {
          dispatch(setErrorMessage('modals.error.tryLater'));
        }
      })
      .finally(() => {
        dispatch(setAuthLoader(false));
      });
  };

export const { setAuth, setAuthLoader, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
