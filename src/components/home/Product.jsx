import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="w-[450px] p-3 mb-2 mx-2 border rounded-md relative cursor-pointer">
      <div className="text-xl font-bold absolute rounded-md top-2 right-2 bg-red-600 text-white px-3 py-2 m-1">
        {product?.price} <span className="text-md">₺</span>
      </div>
      <img
        className="w-[250px] h-[200px] object-contain m-auto rounded"
        src={product?.image}
        alt=""
      />
      <div className='text-center px-3 m-3 font-bold text-xl'>{product?.title}</div>
    </div>
  );
};

export default Product;
