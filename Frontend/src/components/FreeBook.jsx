import React from "react";

import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Cards from "./Cards";
import { useState } from "react";
import { useEffect } from "react";

const FreeBook = () => {
   const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       const data=res.data.filter((data)=>data.category==="Free")
       console.log(data);
       setBook(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);

  return (
    <>
      {/* Heading */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <h1 className="font-semibold text-xl pb-2">
          Free Offered Courses
        </h1>
        <p>Learn free courses and improve your skills easily.</p>
      </div>

      {/* Slider */}
      <div className="max-w-screen-2xl mx-auto md:px-20 mt-6">
        <Swiper
  modules={[Navigation]}
  navigation={true}
  spaceBetween={10}
  slidesPerView={3}
  className="px-2"
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
          {book.map((item) => (
            <SwiperSlide className="!overflow-visible">
              <div className="p-2 overflow-visible">
              <Cards item={item} key={item.id}/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FreeBook;