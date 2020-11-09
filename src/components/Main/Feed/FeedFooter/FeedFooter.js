import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import classes from './FeedFooter.module.css';
import { IconButton } from '@material-ui/core';

const FeedFooter = () => {
   return (
      <div className={classes.FeedFooter}>
         <IconButton>
            <HomeIcon
               className={`${classes.FeedFootIcon} ${classes.FeedFootIconActive}`}
            />
         </IconButton>
         <IconButton>
            <SearchIcon className={classes.FeedFootIcon} />
         </IconButton>
         <IconButton>
            <NotificationsNoneIcon className={classes.FeedFootIcon} />
         </IconButton>
         <IconButton>
            <MailOutlineIcon className={classes.FeedFootIcon} />
         </IconButton>
      </div>
   );
};

export default FeedFooter;
