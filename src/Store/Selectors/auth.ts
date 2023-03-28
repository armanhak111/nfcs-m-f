import { createSelector } from 'reselect';

const mainSelector = (state: TState) => state.auth;

export const getAuthStatus = createSelector(mainSelector, (state) => state.isAuthenticated);

export const getAuthLoading = createSelector(mainSelector, (state) => state.authLoader);

export const getCurrentUser = createSelector(mainSelector, (state) => state.currentUser);

export const getAuthLoader = createSelector(mainSelector, (state) => state.authLoader);

export const getAuthFullField = createSelector(mainSelector, (state) => state.authFulField);
