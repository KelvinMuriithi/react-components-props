import React, {useState} from 'react';
import Product from './Product'; 

// Parent component
function ProductList() {
  const [products, setProducts] = useState([
    {id:1, name:"Iphone", price:14000},
    {id:2, name:"Iphone", price:12000}
  ]); 

  //function to handle new price updates
  const handleUpdatePrice = (id,newPrice)=>{
    setProducts(prevProducts => 
      prevProducts.map(product=>product.id===id? {...product, price:newPrice}:product))
  }
  return (
    <div>
      <h1>Products</h1>
      {/* Render multiple Product components with different props */}
      {products.map(product=>(
        <Product key={product.id} id={product.id} name={product.name} price={product.price} updatePrice={handleUpdatePrice}/>
      ))}
    </div>
  );
}

export default ProductList;
