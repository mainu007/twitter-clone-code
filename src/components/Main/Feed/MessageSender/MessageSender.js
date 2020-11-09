import React, { useState } from 'react';
import { Avatar, Button, IconButton } from '@material-ui/core';
import PanoramaIcon from '@material-ui/icons/Panorama';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import FormatAlignLeftTwoToneIcon from '@material-ui/icons/FormatAlignLeftTwoTone';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import InsertInvitationTwoToneIcon from '@material-ui/icons/InsertInvitationTwoTone';
import classes from './MessageSender.module.css';
import db from '../../../../firebase';
import firebase from 'firebase';
import { useStateValue } from '../../../../store/StateProvider';

const MessageSender = () => {
   const [{ user }] = useStateValue();
   const [tweetText, setTweetText] = useState('');
   const [tweetImageUrl, setTweetImageUrl] = useState('');
   const sendTweet = (e) => {
      e.preventDefault();
      db.collection('posts').add({
         displayName: user.displayName,
         avatarSrc: user.photoUrl,
         username: user.username,
         verified: false,
         text: tweetText,
         imageUrl: tweetImageUrl,
         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTweetText('');
      setTweetImageUrl('');
   };
   return (
      <div className={classes.MessageSender}>
         <div className={classes.MessageLeft}>
            <Avatar src={user.photoUrl} className={classes.Avatar} />
         </div>
         <div className={classes.MessageRight}>
            <div className={classes.MessageForm}>
               <input
                  type="text"
                  placeholder="What's Happening?"
                  value={tweetText}
                  onChange={(e) => setTweetText(e.target.value)}
               />
               <input
                  type="text"
                  placeholder="Optional: Enter Image Url"
                  value={tweetImageUrl}
                  className={classes.ImageUrlInput}
                  style={{ display: tweetText ? 'inherit' : 'none' }}
                  onChange={(e) => setTweetImageUrl(e.target.value)}
               />
            </div>
            <div className={classes.MessageBottom}>
               <div className={classes.MessageOption}>
                  <IconButton className={classes.IconButton}>
                     <PanoramaIcon />
                  </IconButton>
                  <IconButton className={classes.IconButton}>
                     <GifRoundedIcon />
                  </IconButton>
                  <IconButton className={classes.IconButton}>
                     <FormatAlignLeftTwoToneIcon />
                  </IconButton>
                  <IconButton className={classes.IconButton}>
                     <SentimentSatisfiedTwoToneIcon />
                  </IconButton>
                  <IconButton className={classes.IconButton}>
                     <InsertInvitationTwoToneIcon />
                  </IconButton>
               </div>
               <Button
                  onClick={sendTweet}
                  className={classes.TweetButton}
                  disabled={!tweetText}
               >
                  Tweet
               </Button>
            </div>
         </div>
      </div>
   );
};

export default MessageSender;
