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
      action.payload.date = Date.now();
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

      state.selectedUser = null;
      state.userList = state.userList;

      localStorage.setItem("USER_LIST", JSON.stringify(state.userList));
      break;
    }
    case DELETE_USER: {
      const data = state.userList;

      const idx = data.findIndex((element) => element.id === action.payload.id);

      data.splice(idx, 1);

      state.userList = data;

      localStorage.setItem("USER_LIST", JSON.stringify(state.userList));

      break;
    }
  }
  return { ...state };
};
