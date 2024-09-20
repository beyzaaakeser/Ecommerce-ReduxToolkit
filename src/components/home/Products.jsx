import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryProducts,
  getProducts,
} from '../../redux/slices/productSlice';
import Loader from '../loader/Loader';
import Product from './Product';
import ReactPaginate from 'react-paginate';

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((store) => store.products);

  console.log(sort);

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
    dispatch(getProducts());
  }, [dispatch, category]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {productsStatus == 'LOADING' ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap gap-4 ms-2 ">
            {currentItems
              ?.sort((a, b) =>
                sort === 'Inc'
                  ? a.price - b.price
                  : sort === 'Dec'
                  ? b.price - a.price
                  : null
              )
              .map((product, index) => (
                <Product key={index} product={product} />
              ))}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
