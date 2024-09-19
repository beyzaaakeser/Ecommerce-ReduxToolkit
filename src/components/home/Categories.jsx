import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/slices/categorySlice';

const Categories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 bg-gray-100 p-4">
      <div className='border-b pb-1 text-xl font-bold'>CATEGORY</div>
      <div className="capitalize">
        {categories.map((category, index) => {
          return <div className='text-lg  cursor-pointer hover:bg-gray-200 hover:ps-4 hover:transition hover:rounded ps-0 p-2' key={index}>{category}</div>;
        })}
      </div>
    </div>
  );
};

export default Categories;
