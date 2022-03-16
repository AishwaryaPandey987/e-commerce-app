/* eslint-disable arrow-body-style */
import React from 'react';
import { Button, FlexboxGrid } from 'rsuite';
import { Provider } from '../misc/Context';


const Home = (products) => {
  return (
    <FlexboxGrid>
    <Provider>

  <div className="box1">
     <h6>Item 1</h6>
     <Button onClick={products} > Go to these items</Button>

  </div>
  <div className="box2">
    <h6>Item2</h6>
    <Button  onClick={products}> Goto these items</Button>
  </div>
    </Provider>
  </ FlexboxGrid>
  );
};

export default Home;
