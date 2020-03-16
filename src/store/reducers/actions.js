import * as types from '../types';

const INITIAL_STATE = {
  wellsList: [],
  logsList: [],
  formationsList: []
};

const setWellsList = (state, { payload }) => ({
  ...state,
  wellsList: payload
});

const setLogsList = (state, { payload }) => ({
  ...state,
  logsList: payload
});

const setFormationsList = (state, { payload }) => ({
  ...state,
  formationsList: payload
});

const actionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_WELLS_LIST:
      return setWellsList(state, action);
    case types.SET_LOGS_LIST:
      return setLogsList(state, action);
    case types.SET_FORMATIONS_LIST:
      return setFormationsList(state, action);
    // case types.SELECT_WELL:
    //   return selectedItem(state, action);
    default:
      return state;
  }
};

export default actionsReducer;
