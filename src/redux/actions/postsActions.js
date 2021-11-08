import { NEW_POST } from "./types";

export function newPost(post) {
  return {
    type: NEW_POST,
    payload: post
  }
}