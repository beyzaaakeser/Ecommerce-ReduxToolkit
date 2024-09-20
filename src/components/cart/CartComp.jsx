import React from 'react';
import { removeFromCart } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({ cart }) => {
    const dispatch = useDispatch()
  console.log(cart);
  return (
    <div className="my-16 flex items-center justify-between">
      <img
        className="w-[150px] h-[150px] object-contain"
        src={cart?.image}
        alt=""
      />
      <div className="w-[450px]">
        <div className="font-semibold text-lg">{cart?.title}</div>
      </div>

      <div className="font-bold text-lg w-[100px]">
        {cart?.price}₺ <span>{cart?.quantity}</span>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-red-500 text-white text-xl cursor-pointer rounded-md w-[150px] h-10 flex items-center justify-center"
      >
        Clear Product
      </div>
    </div>
  );
};

export default CartComp;
