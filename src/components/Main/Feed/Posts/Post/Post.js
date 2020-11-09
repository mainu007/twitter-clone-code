import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import classes from './Post.module.css';

const Post = ({
   avatarSrc,
   displayName,
   username,
   text,
   imageUrl,
   verified,
}) => {
   return (
      <div className={classes.Post}>
         <div className={classes.PostLeft}>
            <Avatar src={avatarSrc} className={classes.Avatar} />
         </div>
         <div className={classes.PostRight}>
            <div className={classes.PostTop}>
               <div className={classes.PostTitle}>
                  <h3>{displayName}</h3>
                  {verified && (
                     <VerifiedUserIcon className={classes.VerifiedIcon} />
                  )}
                  <p>@{username}</p>
               </div>
               <MoreHorizSharpIcon className={classes.MoreIcon} />
            </div>
            <p className={classes.PostText}>
               {text.length > 235 ? `${text.substring(0, 235)}...` : text}
            </p>
            <div className={classes.ImageContainer}>
               {imageUrl && <img src={imageUrl} alt="..." />}
            </div>

            <div className={classes.PostOption}>
               <IconButton>
                  <ChatBubbleOutlineIcon />
               </IconButton>
               <IconButton>
                  <RepeatIcon />
               </IconButton>
               <IconButton>
                  <FavoriteBorderIcon />
               </IconButton>
               <IconButton>
                  <VerticalAlignTopIcon />
               </IconButton>
            </div>
         </div>
      </div>
   );
};

export default Post;
