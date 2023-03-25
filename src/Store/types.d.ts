declare interface IMainSliceState {
  locale: string;
}
declare interface IDashboardSliceState {
  loading: boolean;
}
declare interface IDashboardLocalSlice {
  currentSlide: string;
}
declare type IModalSliceState = {
  modal: '' | 'change-password' | 'forgot-password-success' | 'reset-password-success';
  errorMessage: string;
  actionModal: string;
};

declare interface IAuthSlice {
  isAuthenticated: boolean;
  authLoader: boolean;
  currentUser: any;
}

declare type TState = {
  main: IMainSliceState;
  auth: IAuthSlice;
  modal: IModalSliceState;
  dashboard: IDashboardSliceState;
  dashboardLocal: IDashboardLocalSlice;
};

declare interface IUser {
  email: string;
  id: string;
  isActivated: boolean;
  name: string;
  upt: number;
}
