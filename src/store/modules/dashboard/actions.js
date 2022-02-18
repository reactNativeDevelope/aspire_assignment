import {DASHBOARD_REQUEST, DASHBOARD_SUCCESS, DASHBOARD_FAIL} from './types';

export const DashboardRequest = () => ({
  type: DASHBOARD_REQUEST,
});
export const DashboardSuccess = data => ({
  type: DASHBOARD_SUCCESS,
  data,
});
export const DashboardFail = () => ({
  type: DASHBOARD_FAIL,
});
