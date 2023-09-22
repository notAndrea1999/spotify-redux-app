import { SET_ALBUM } from "../actions";

const initialState = {
  content: [],
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM:
      return { ...state, content: [...state.content, action.payload] };
    default:
      return state;
  }
};

export default HomeReducer;
