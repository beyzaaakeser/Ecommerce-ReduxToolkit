import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slices/productSlice';
import Loader from '../loader/Loader';
import Product from './Product';

const Products = () => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((store) => store.products);
  console.log(products, productsStatus);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {productsStatus == 'LOADING' ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap gap-4 ms-4 '>
          {products?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
