import React , {useState} from 'react';

// Child component
function Product({ id, name, price, updatePrice }) {
  const [newPrice, setNewPrice] = useState('')

  //event handler to update the price
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newPrice.trim()) return;
    updatePrice(id, parseFloat(newPrice));
    setNewPrice('')
  }
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <form onSubmit={handleSubmit}>
        <input type="number" value={newPrice} placeholder='New price' 
        onChange={(e)=> setNewPrice(e.target.value)}
        />
        <button type='submit'>Update Price</button>
      </form>
    </div>
  );
}

export default Product;
