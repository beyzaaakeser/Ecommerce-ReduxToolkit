import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../../redux/slices/cartSlice';
import CartComp from '../../components/cart/CartComp';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);

  console.log(carts, totalAmount, itemCount);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div>
      {carts?.length > 0 ? (
        <div>
          {carts.map((cart, index) => (
            <CartComp key={index} cart={cart} />
          ))}
          <div className='flex items-center justify-end text-3xl font-semibold'>Total Price : <span> {totalAmount}₺</span> </div>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
