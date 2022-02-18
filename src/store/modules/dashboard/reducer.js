import {DASHBOARD_REQUEST, DASHBOARD_SUCCESS, DASHBOARD_FAIL} from './types';

const INITIAL_STATE = {
  dashboard: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DASHBOARD_REQUEST:
      return {
        ...state,
      };
    case DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboard: action.data,
      };
    case DASHBOARD_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
