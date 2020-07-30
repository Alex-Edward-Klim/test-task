import React from 'react';

import './tableItemStyle.css';

function TableItem({num, brand, model, year, price}) {
  return (
    <tr>
      <td>{num}</td>
      <td>{brand}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{price}</td>
    </tr>
  )
}

export default TableItem;
