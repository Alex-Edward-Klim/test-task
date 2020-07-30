import React from 'react';

import './newsItemStyle.css';

function NewsItem({num}) {
  return (
    <div className="newsItem">
      <h3 className="newsItemHeading">{num} - News Heading</h3>
      <p className="newsItemText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
      </p>
      <p className="newsItemAuthor">by John Smith, BBCNN</p>
    </div>
  );
}

export default NewsItem;
