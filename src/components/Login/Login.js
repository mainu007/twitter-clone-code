import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import classes from './Login.module.css';
import { auth, provider } from '../../firebase';
import { useStateValue } from '../../store/StateProvider';
import { actionTypes } from '../../store/action';

const Login = () => {
   const [, dispatch] = useStateValue();
   const signIn = () => {
      auth
         .signInWithPopup(provider)
         .then((result) => {
            const email = result.user.email;
            const username = email.slice(0, email.lastIndexOf('@'));
            const user = {
               displayName: result.user.displayName,
               username,
               photoUrl: result.user.photoURL,
            };
            dispatch({
               type: actionTypes.SET_USER,
               user,
            });
         })
         .catch((err) => console.log(err.messages));
   };

   return (
      <div className={classes.Login}>
         <div className={classes.LoginTop}>
            <TwitterIcon className={classes.TwitterIcon} />
            <h2>Twitter</h2>
         </div>
         <Button
            onClick={signIn}
            variant="outlined"
            className={classes.LoginButton}
         >
            Sign In
         </Button>
      </div>
   );
};

export default Login;
