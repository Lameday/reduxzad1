const FETCH_USERS_REQUESTED = "users/FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEED = "users/FETCH_USERS_SUCCEED";
const FETCH_USERS_FAILED = "users/FETCH_USERS_FAILED";
const USERS_RESET = "users/USERS_RESET"
const ADD_USER = "users/ADD_USER"

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  isError: false
};

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchSucceed = (data) => ({ type: FETCH_USERS_SUCCEED, payload: data });
const addUserSucceed = (data) => ({ type: ADD_USER, payload: data})

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSucceed(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};


export const resetUser = () => {
  return{
    type: USERS_RESET
  }
}

export const addUser = () => {
  return function (dispatch) {
    dispatch(fetchRequested());
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUserSucceed(data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
}

const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUESTED:
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case FETCH_USERS_SUCCEED:
        return {
          ...state,
          isLoading: false,
          isError: false,
          users: action.payload.results
        };
      case FETCH_USERS_FAILED:
        return {
          ...state,
          isLoading: false,
          isError: true
        };
      case USERS_RESET:
        return {
          ...state,
          isLoading: false,
          isError: false,
          users: []
        }
      case ADD_USER:
        return {
          ...state,
          isLoading: false,
          isError: false,
          users: state.users.concat(action.payload.results)
        }
      default:
        return state;
    }
  };

export default usersReducer;