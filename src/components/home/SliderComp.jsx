import React from 'react';
import Slider from 'react-slick';

const SliderComp = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center px-6 ">
          <div className="">
            <div className="text-5xl font-bold">
              Comfort and style together.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
              Check Out
            </div>
          </div>
          <img src="/src/assets/img/s2.jpg" alt="" />
        </div>
        <div className="!flex items-center px-6 ">
          <div>
            <div className="text-5xl font-bold">Add color to daily life.</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
              Check Out
            </div>
          </div>
          <img src="/src/assets/img/s3.jpg" alt="" />
        </div>
        <div className="!flex items-center px-6 ">
          <div>
            <div className="text-5xl font-bold">
              An essential for your wardrobe.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
              Check Out
            </div>
          </div>
          <img src="/src/assets/img/s4.jpg" alt="" />
        </div>
        <div className="!flex items-center px-6 ">
          <div>
            <div className="text-5xl font-bold">Comfort and support.</div>
            <div className="border rounded-full cursor-pointer text-2xl w-[180px] h-14 flex items-center justify-center bg-gray-200 mt-10">
              Check Out
            </div>
          </div>
          <img src="/src/assets/img/s1.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
