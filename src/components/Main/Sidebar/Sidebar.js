import React from 'react';
import SidebarOption from './SidebarOption/SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import { Button, IconButton, useMediaQuery } from '@material-ui/core';
import classes from './Sidebar.module.css';
import InlineProfile from './InlineProfile/InlineProfile';

const Sidebar = () => {
   const isBigScreen = useMediaQuery('(min-width:1280px)');
   return (
      <div className={classes.Sidebar}>
         <div className={classes.SidebarTop}>
            <IconButton>
               <TwitterIcon className={classes.SidebarTwitterIcon} />
            </IconButton>
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            <Button
               className={classes.SidebarTweetButton}
               variant="outlined"
               fullWidth
            >
               {isBigScreen ? 'Tweet' : <CreateIcon />}
            </Button>
         </div>

         <InlineProfile />
      </div>
   );
};

export default Sidebar;
