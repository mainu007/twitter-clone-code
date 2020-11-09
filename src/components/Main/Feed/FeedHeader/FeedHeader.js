import React from 'react';
import classes from './FeedHeader.module.css';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import { Avatar, useMediaQuery } from '@material-ui/core';
import { useStateValue } from '../../../../store/StateProvider';

const FeedHeader = () => {
   const mobileScreen = useMediaQuery('(max-width:479px)');
   const [{ user }] = useStateValue();
   return (
      <div className={classes.FeedHeader}>
         <div className={classes.FeedHeaderLeft}>
            {mobileScreen && <Avatar src={user.photoUrl} />}
            <h2>Home</h2>
         </div>
         <ScatterPlotIcon className={classes.Icon} />
      </div>
   );
};

export default FeedHeader;
