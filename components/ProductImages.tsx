"use client";

import Image from 'next/image'
import React, { useState } from 'react'


const images = [
    {
        id: 1,
        url: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/56904/pexels-photo-56904.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
]
const ProductImages = () => {
    const [index, setIndex] = useState(0)
  return (
    <div>
      <div className=''>
        <div className='h-[500px] relative'>
            <Image 
            src={images[index].url}
            alt='' fill sizes='50vw'
            className='object-cover rounded-md'
            />
        </div>
        <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
            <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
            key={img.id}
            onClick={()=>setIndex(i)}
            >
             <Image 
             src={img.url}
             alt='' fill sizes='30vw'
             className='object-cover rounded-md'
             />
         </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProductImages
