import React from 'react';
const Pizza = (props) => {
    const {data} = props;
    console.log('Pizza.js data ', data)
  return (
      <div>
          <h2>{data.size}</h2>
          <h3>{data.sauce}</h3>
      </div>
  );
};
export default Pizza;