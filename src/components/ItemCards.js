import React from 'react';
const ItemCards = (props) => {
    const {rest} = props;
    console.log('ItemCard.js data ', rest)
  return (
      <div className = 'item-card'>
          <img src = {rest.img}/>
          <h2>{rest.name}</h2>
          <h3>{rest.desc}</h3>
          <div className = 'delivery-fields'>
              <p>{rest.delTime}</p>
              <p>{rest.delFee}</p>
          </div>
      </div>
  );
};
export default ItemCards;