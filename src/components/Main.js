import React from 'react';

import './mainStyle.css';

import hardcodedArr from '../dataBase/hardcodedDataBase';

import Item from './Item';

import NewsItem from './NewsItem';

function Main() {
  return (
    <div className="mainContentWrapper">
      <h3>This website is about:</h3>
      <p className="websiteDescription">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, error excepturi tempora blanditiis pariatur suscipit beatae doloribus expedita asperiores sint id ipsam, aliquam iste et quod ipsum odit repellendus dolore.
      </p>
      <div className="lastItemsAndNewsWrapper">
        <div className="fiveLastItems">
          <h3>Five last items from the catalog:</h3>
          {
            hardcodedArr.slice(0, 5).map(bicycle => {
              return <Item key={bicycle.id} brand={bicycle.brand} model={bicycle.model} logo={bicycle.logo} price={bicycle.price} />
            })
          }
        </div>
        <div className="fiveLastNews">
          <h3>Five last news:</h3>
          {
        [
          <NewsItem key="1" num="1" />,
          <NewsItem key="2" num="2" />,
          <NewsItem key="3" num="3" />,
          <NewsItem key="4" num="4" />,
          <NewsItem key="5" num="5" />
        ]
      }
        </div>
      </div>
    </div>
  );
}

export default Main;
