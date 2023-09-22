// import csrfFetch from "./csrf";

const RECEIVE_POSTS = "/posts/receivePosts";
const RECEIVE_POST = "/posts/receivePost";
const REMOVE_POST = "/posts/receivePost";

export const receivePosts = (data) => {
  return { type: RECEIVE_POSTS, data };
};

export const receivePost = (data) => {
  return { type: RECEIVE_POST, data };
};

export const removePost = (id) => {
  return { type: REMOVE_POST, id };
};

export const getPosts = (state) => {
  if (state.posts) return Object.values(state.posts);
  return [];
};

export const getPost = (state) => {
  if (state.post) return state.post;
  return null;
};

// export const createPost = (post) => async dispatch => {
//   const res = await csrfFetch("/api/post")
// }

const postsReducer = (state = [], action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      return { ...nextState, ...action.data.posts };
    case RECEIVE_POST:
      nextState[action.data.post.id] = action.data.post;
      return nextState;
    default:
      return state;
  }
};

export default postsReducer;
