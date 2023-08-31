import {
  ADD_USER,
  SET_SELECTED_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../type/userType";

const DEFAULT_STATE = {
  userslist: [],
  selectedUser: null,
};

export const userReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_USER: {
      actions.payload.id = Date.now();
      state.userslist = [...state.userslist, action.payload];
      break;
    }
    case SET_SELECTED_USER: {
      state.selectedUser = action.payload;
      break;
    }
    case UPDATE_USER: {
      state.userslist = state.userslist.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      break;
    }
    case DELETE_USER: {
      state.userslist = state.userslist.filter(
        (user) => user.id !== action.payload
      );
      break;
    }
  }
  return { ...state };
};
