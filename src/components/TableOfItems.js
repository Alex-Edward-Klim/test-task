import React from 'react';

import hardcodedArr from '../dataBase/hardcodedDataBase';

import './tableOfItemsStyle.css';

import TableItem from './TableItem';

function TableOfItems() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> 
          {
            hardcodedArr.map((bicycle, index) => {
              return <TableItem key={bicycle.id} num={index + 1} brand={bicycle.brand} model={bicycle.model} year={bicycle.year} price={bicycle.price} />
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default TableOfItems;
