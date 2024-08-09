import React, { useState } from 'react';
import { useAppContext } from '../../../Context/Context.jsx';
import { useParams } from 'react-router-dom';

function ItemCount({ itemIndex }) {
  const { id } = useParams();
  const { addToCartDetail } = useAppContext();
  
  const [quantity, setQuantity] = useState(itemIndex.quantity || 1);
 
  const [isVisible, setIsVisible] = useState(true); 
 
  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value) || 1);
  };

  const handleAddToCart = () => {
    addToCartDetail(id, quantity);
    setIsVisible(false); 
  };

  if (!isVisible) return null; 

  return (
    <div>
      <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      <button className="btn" onClick={handleAddToCart}>
        Añadir al carrito
      </button>
    </div>
  );
}

export default ItemCount;