import { actionTypes } from './action';

export const initialState = {
   user: null,
   posts: [],
};

export const reducer = (state, action) => {
   switch (action.type) {
      case actionTypes.SET_USER:
         return {
            ...state,
            user: action.user,
         };
      case actionTypes.SET_POSTS:
         return {
            ...state,
            posts: action.posts,
         };
      default:
         return state;
   }
};
