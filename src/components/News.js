import React from 'react';

import './newsStyle.css';

import NewsItem from './NewsItem';

function News() {
  return (
    <div className="newsWrapper">
      <h1 className="newsGeneralHeading">News</h1>
      {
        [
          <NewsItem key="1" num="1" />,
          <NewsItem key="2" num="2" />,
          <NewsItem key="3" num="3" />,
          <NewsItem key="4" num="4" />,
          <NewsItem key="5" num="5" />,
          <NewsItem key="6" num="6" />,
          <NewsItem key="7" num="7" />,
          <NewsItem key="8" num="8" />,
          <NewsItem key="9" num="9" />,
          <NewsItem key="10" num="10" />
        ]
      }
    </div>
  );
}

export default News;
