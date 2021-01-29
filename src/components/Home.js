import React from 'react';

import ItemCards from './ItemCards'
import Stock from '../imgs/stock.jpg'

const Home = () => {
  return (
    <div className ='home-div'>
        <div className = 'banner' >
            <h1>Your favorite pizza delivered while you code!</h1>
        </div>
        <div className = 'item-cards'>
            {data.map(rest =>{
                return <ItemCards rest = {rest}/>
        })}
        </div>
    </div>
  );
};
const data = [
    {
        name: "Mcdonald's",
        id: 0,
        img: Stock,
        desc: '$- American - Fast Food - Burgers',
        delTime: '20-30 Min',
        delFee: '$5.99 Delivery Fee',

    },
    {
        name: "sweetgreen",
        id: 1,
        img: Stock,
        desc: '$- Healthy - Salads',
        delTime: '30-45 Min',
        delFee: '$4.99 Delivery Fee',

    },
    {
        name: "Starbucks",
        id: 2,
        img: Stock,
        desc: '$- Cafe - Coffee & Tea - Breakfast and Brunch',
        delTime: '10-20 Min',
        delFee: '$3.99 Delivery Fee'

    },
    {
        name: "Hong Kong Palace",
        id: 3,
        img: Stock,
        desc: '$- Chinese - Takeout',
        delTime: '30-40 Min',
        delFee: '$2.99 Delivery Fee'

    },
    {
        name: "Taco Bell",
        id: 4,
        img: Stock,
        desc: '$- American-Mexican - Fast Food - Tacos',
        delTime: '20-30 Min',
        delFee: '$0.00 Delivery Fee'

    },
    {
        name: "People's Indian",
        id: 5,
        img: Stock,
        desc: '$- Indian - Takeout',
        delTime: '45-60 Min',
        delFee: '$4.99 Delivery Fee'

    }
]
export default Home;