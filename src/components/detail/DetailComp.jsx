import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const increment = () => {
    if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity:productDetail?.quantity,
        price:productDetail?.price
      })
    );
  };
  return (
    <div className="flex gap-20 mt-36">
      <img
        className="w-[500px] h-[500px] object-contain"
        src={productDetail?.image}
        alt=""
      />
      <div className="mt-2">
        <div className="text-5xl font-bold w-3/4">{productDetail?.title}</div>
        <div className="mt-4 w-3/4 text-xl">{productDetail?.description}</div>
        <div className="flex mt-5 gap-10  text-lg">
          <div className="bg-red-600 px-4 py-1 rounded font-semibold">
            Price : {productDetail?.price} ₺
          </div>
          <div className="bg-gray-400 px-4 py-1 rounded font-semibold">
            Rating : {productDetail.rating?.rate}
          </div>
        </div>
        <div className="flex items-center gap-5 mt-4 justify-end me-6">
          <div onClick={decrement} className="text-4xl cursor-pointer">
            -
          </div>
          <input
            className="w-8 text-center text-2xl font-semibold"
            type="text"
            value={quantity}
          />
          <div onClick={increment} className="text-3xl cursor-pointer">
            +
          </div>
        </div>
        <div className="flex justify-end">
          <div
            onClick={addBasket}
            className="border w-[150px] h-10 flex items-center justify-center text-xl rounded-md
         bg-gray-100 cursor-pointer mt-4 "
          >
            Add to Basket
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
