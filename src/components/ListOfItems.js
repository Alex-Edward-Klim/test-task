import React from 'react';

import Item from './Item';

import hardcodedArr from '../dataBase/hardcodedDataBase';

import './listOfItemsStyle.css';

function ListOfItems() {
  return (
    <div className="list">
      {
        hardcodedArr.map(bicycle => {
          return <Item key={bicycle.id} brand={bicycle.brand} model={bicycle.model} logo={bicycle.logo} price={bicycle.price} />
        })
      }
    </div>
  );
}

export default ListOfItems;
