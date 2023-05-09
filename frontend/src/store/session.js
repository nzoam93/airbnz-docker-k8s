import csrfFetch from "./csrf";

//ACTION TYPES
const SET_USER = 'users/SET_USER';
const REMOVE_USER = 'users/REMOVE_USER';

//ACTION CREATORS
export const setCurrentUser = user => ({
    type: SET_USER,
    payload: user
})

export const removeCurrentUser = () => ({
    type: REMOVE_USER,
    // userId
})

//UNTIL WE CLEAR SESSION STORAGE, USE THIS AS THE USER!!!!!
const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser"))
};


//login stuff and CSRF stuff
const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
  else sessionStorage.removeItem("currentUser");
  }

//LOGIN thunk action creator
export const login = ({ credential, password }) => async dispatch => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  // return response;
};

//much the same as the login function above. Restores a session if there is one to be restored
export const restoreSession = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  storeCSRFToken(response);
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  // return response;
};

//SIGN UP thunk action creator
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  // return response;
};

//LOGOUT thunk action creator
export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  if(response.ok){
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    // return response;
  }

};



//SESSION REDUCER
const sessionReducer = (state = initialState, action) => {
  switch(action.type){
      case SET_USER:
          return { ...state, user: action.payload };
      case REMOVE_USER:
          // const nextState = {...state};
          // delete nextState[action.userId]
          // return nextState;
          return {...state, user: null}

      default:
          return state;
  }
}

export default sessionReducer;
