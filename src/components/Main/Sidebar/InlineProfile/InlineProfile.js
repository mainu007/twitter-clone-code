import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, useMediaQuery } from '@material-ui/core';
import { useStateValue } from '../../../../store/StateProvider';
import classes from './InlineProfile.module.css';

const InlineProfile = () => {
   const isBigScreen = useMediaQuery('(min-width:1280px)');
   const [{ user }] = useStateValue();
   return (
      <div className={classes.SidebarBottom}>
         <div className={classes.ProfileLeft}>
            <Avatar src={user.photoUrl} />
            {isBigScreen && (
               <div className={classes.InlineProfile}>
                  <h3>{user.displayName}</h3>
                  <p>{user.username}</p>
               </div>
            )}
         </div>
         {isBigScreen && <ExpandMoreIcon className={classes.MoreIcon} />}
      </div>
   );
};

export default InlineProfile;
