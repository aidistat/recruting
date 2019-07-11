const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_POSITIONS = 'SET_POSITIONS';
const SET_STATUSES = 'SET_STATUSES';

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  positions: [],
  statuses: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_STATUSES: {
      return { ...state, statuses: action.statuses };
    }
    case SET_POSITIONS: {
      return { ...state, positions: action.positions };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    default:
      return state;
  }
};

export const setUsersAC = users => ({ type: SET_USERS, users });
export const setPositionsAC = positions => ({ type: SET_POSITIONS, positions });
export const setStatusesAC = statuses => ({ type: SET_STATUSES, statuses });

export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default userReducer;
