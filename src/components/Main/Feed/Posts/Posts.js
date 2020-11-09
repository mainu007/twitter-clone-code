import React, { useEffect } from 'react';
import db from '../../../../firebase';
import { useStateValue } from '../../../../store/StateProvider';
import { actionTypes } from '../../../../store/action';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
   const [{ posts }, dispatch] = useStateValue();
   useEffect(() => {
      db.collection('posts')
         .orderBy('timestamp', 'desc')
         .onSnapshot((result) => {
            const posts = result.docs.map((post) => ({
               postId: post.id,
               data: post.data(),
            }));
            console.log(posts);
            dispatch({ type: actionTypes.SET_POSTS, posts });
         });
   }, []);

   return (
      <div className={classes.Posts}>
         {posts.map((post) => (
            <Post key={post.id} {...post.data} />
         ))}
      </div>
   );
};

export default Posts;
