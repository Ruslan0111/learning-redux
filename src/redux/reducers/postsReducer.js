import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  posts: [],
  fetchedPosts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        posts: state.posts.concat([action.payload])
      };
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload
      };
    default:
      return state;
  }
}
