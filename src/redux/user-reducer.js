const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      console.log("REDUCER", action.currentPage);
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
export const setCurrentPageAC = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCountAC = totalUsersCount => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

export default userReducer;
