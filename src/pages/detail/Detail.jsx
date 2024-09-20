import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../../redux/slices/productSlice';
import DetailComp from '../../components/detail/DetailComp';
import Loader from '../../components/loader/Loader';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, [dispatch, id]);

  console.log(productDetail);

  return (
    <div>
      {productDetailStatus === 'LOADING' ? (
        <Loader />
      ) : (
        <DetailComp productDetail={productDetail} />
      )}
    </div>
  );
};

export default Detail;
