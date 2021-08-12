import React from 'react';
import AddDish from '../../screens/AddDish/AddDish';
import Basket from '../../screens/Basket/Basket';
import EditDish from '../../screens/EditDish/EditDish';
import Shop from '../../screens/Shop/Shop';
import Welcome from '../../screens/Welcome/Welcome';

const Main = () => {
  return (
    <div>
      MAIN
      <Welcome />
      <Shop />
      <Basket />
      <AddDish />
      <EditDish />
    </div>
  );
};

export default Main;