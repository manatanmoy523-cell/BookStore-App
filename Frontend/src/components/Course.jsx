import React from 'react'
import Cards from './Cards';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res = await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className='mt-20 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi.
            Aspernatur, perspiciatis. Tempora dolorum saepe, minima beatae natus inventore?
            Aut quod tenetur totam, labore cumque aspernatur ea sunt!
            Dignissimos aut harum vero quae vitae iste qui placeat?
            Ipsa aspernatur repellat repudiandae maxime dolor ratione provident ut.
            Fuga pariatur magni voluptates veritatis accusantium animi, vero voluptatum?
            Laboriosam, vitae tenetur beatae facilis odit voluptas dolore rem?</p>
            <Link to="/">
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-5 px-4 overflow-visible'>
            {
              book.map((item)=>(
                <Cards key={item.id} item={item}/>
              ))
            }
          </div>
      </div>
    </>
  )
}

export default Course;