import React from 'react'

const Cards = ({item}) => {
  return (
    <>
        <div className='my-7 mb-9 dark:text-white'>
            <div className="card bg-base-100 w-full 
transform transition duration-300 hover:scale-[1.03] hover:z-10
shadow-lg 
border border-transparent dark:border-white/20
rounded-xl overflow-hidden">
  <figure>
    <img
      src={item.image}
      alt="book" />
  </figure>
  <div className="card-body dark:bg-black">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
  <button className="btn bg-pink-500 text-white px-2 py-1 border-[2px] hover:bg-blue-500 duration-200">
    ${item.price}
  </button>
  <button className="btn bg-blue-500 text-white p-2 border-[2px] hover:bg-pink-500 duration-200">
    Buy Now
  </button>
</div>
  </div>
</div>
        </div>
    </>
  )
}

export default Cards