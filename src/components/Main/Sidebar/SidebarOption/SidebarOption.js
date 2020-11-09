import { useMediaQuery } from '@material-ui/core';
import React from 'react';
import classes from './SidebarOption.module.css';

const SidebarOption = ({ Icon, text, active }) => {
   const isBigScreen = useMediaQuery('(min-width:1280px)');
   let sidebarOptionClasses = [classes.SidebarOptionInner];
   if (active) {
      sidebarOptionClasses = [
         classes.SidebarOptionInner,
         classes.SidebarOptionActive,
      ];
   }
   return (
      <div className={classes.SidebarOption}>
         <div className={sidebarOptionClasses.join(' ')}>
            <Icon className={classes.Icon} />
            {isBigScreen && <h2>{text}</h2>}
         </div>
      </div>
   );
};

export default SidebarOption;
