import React from 'react';
const Pizza = (props) => {
    const {data} = props;
    console.log('Pizza.js data ', data)
  return (
      <div className = 'order-card'>
          <h2>Name: {data.name}</h2>
          <h2>Size: {data.size}</h2>
          <h3>Sauce: {data.sauce}</h3>
          {!!data.toppings && !!data.toppings.length &&
                <div className="pizza-toppings-list">
                    <h4>Toppings:</h4>
                    <ul>
                        {data.toppings.map( ( topping, idx ) => <li key={ idx }>{ topping }</li>)}
                    </ul>
                </div>}
      </div>
  );
};
export default Pizza;