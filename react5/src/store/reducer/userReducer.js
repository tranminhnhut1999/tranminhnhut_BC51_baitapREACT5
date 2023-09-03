import {
  ADD_USER,
  SET_SELECTED_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../type/userType";

const DEFAULT_STATE = {
  userList: [],
  selectedUser: null,
};


const stringify = localStorage.getItem("USER_LIST");

if (stringify) {
  DEFAULT_STATE.userList = JSON.parse(stringify);
}

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_USER: {
      state.userList = [...state.userList, action.payload];
      localStorage.setItem("USER_LIST", JSON.stringify(state.userList));
      break;
    }
    case SET_SELECTED_USER: {
      state.selectedUser = action.payload;
      break;
    }
    case UPDATE_USER: {
      state.userList = state.userList.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      break;
    }
    case DELETE_USER: {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload
      );
      break;
    }
  }
  return { ...state };
};
