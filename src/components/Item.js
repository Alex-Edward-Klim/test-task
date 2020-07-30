import React from 'react';

import './itemStyle.css';

function Item({brand, model, logo, price}) {
  return (
    <div className="item">
      <h6 className="brand">{brand}</h6>
      <p className="model">{model}</p>
      <img className="picture" src={logo} alt="bicycle"/>
      <p className="price">{price}</p>
      <button>BUY</button>
    </div>
  );
}

export default Item;
