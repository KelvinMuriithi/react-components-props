import React from 'react';
import ProductList from './ProductList'; // Import the ProductList component
import OrderList from './OrderList';//Importing orderList

function App() {
  return (
    <div className="App">
      {/* Render the ProductList component */}
      <ProductList />
      <OrderList />
    </div>
  );
}

export default App;
