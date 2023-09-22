import { SET_ALBUM_PAGE } from "../actions";

const initialState = {
  content: {},
};

const ArtistPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_PAGE:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default ArtistPageReducer;
