import { FETCH_POSTS, NEW_POST } from "./types";

export function newPost(post) {
  return {
    type: NEW_POST,
    payload: post
  };
}

export function fetchPosts() {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({
      type: FETCH_POSTS,
      payload: data
    });
  };

  // return dispatch => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(res => res.json())
  //     .then(data => dispatch({
  //       type: FETCH_POSTS,
  //       payload: data
  //     }))
  // }
}
