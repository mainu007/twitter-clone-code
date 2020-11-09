import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import classes from './Feed.module.css';
import FeedFooter from './FeedFooter/FeedFooter';
import FeedHeader from './FeedHeader/FeedHeader';
import MessageSender from './MessageSender/MessageSender';
import Posts from './Posts/Posts';

const Feed = () => {
   const mobileScreen = useMediaQuery('(max-width:479px)');
   return (
      <div className={classes.Feed}>
         <FeedHeader />
         <MessageSender />
         <Posts />
         {mobileScreen && <FeedFooter />}
      </div>
   );
};

export default Feed;
