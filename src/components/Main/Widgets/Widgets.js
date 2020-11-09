import React, { useState } from 'react';
import {
   TwitterTimelineEmbed,
   TwitterShareButton,
   TwitterFollowButton,
   TwitterHashtagButton,
   TwitterMentionButton,
   TwitterTweetEmbed,
   TwitterMomentShare,
   TwitterDMButton,
   TwitterVideoEmbed,
   TwitterOnAirButton,
} from 'react-twitter-embed';
import classes from './Widgets.module.css';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
   // const [input, setInput] = useState('0');
   const [classesSearchTwitter, setClassesSearchTwitter] = useState([
      classes.SearchTwitter,
   ]);
   const [classesSearchIcon, setClassesSearchIcon] = useState([
      classes.SearchIcon,
   ]);
   const focusHandler = () => {
      setClassesSearchTwitter([
         classes.SearchTwitter,
         classes.SearchTwitterFocus,
      ]);
      setClassesSearchIcon([classes.SearchIcon, classes.SearchIconFocus]);
   };
   const blurHandler = () => {
      setClassesSearchTwitter([classes.SearchTwitter]);
      setClassesSearchIcon([classes.SearchIcon]);
   };
   return (
      <div className={classes.Widgets}>
         <div className={classesSearchTwitter.join(' ')}>
            <SearchIcon className={classesSearchIcon.join(' ')} />
            <input
               type="text"
               placeholder="Search Twitter"
               onFocus={focusHandler}
               onBlur={blurHandler}
            />
         </div>

         <div className={classes.TwitterEmbedContainer}>
            <h2>What's Happening?</h2>
            <TwitterTweetEmbed tweetId={'722222062543192064'} />
            <TwitterTimelineEmbed
               sourceType="profile"
               screenName="JohnWickMovie"
               options={{ height: 400 }}
            />
            <TwitterShareButton
               url={'https://facebook.com/saurabhnemade'}
               options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
            />
         </div>
      </div>
   );
};

export default Widgets;
