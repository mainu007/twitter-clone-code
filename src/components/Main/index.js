import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import { useMediaQuery } from '@material-ui/core';

const Main = () => {
   const pcScreen = useMediaQuery('(min-width:1000px)');
   const tabletScreen = useMediaQuery('(min-width:480px)');
   return (
      <>
         {tabletScreen && <Sidebar />}
         <Feed />
         {pcScreen && <Widgets />}
      </>
   );
};

export default Main;
