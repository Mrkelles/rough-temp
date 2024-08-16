import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Choose a color</h4>
        <ul className='flex items-center gap-3'>
            <li className='w-8 h-8 rounded-full ring-1 ring-[#c9c7c7] cursor-pointer relative bg-[#d85555]'>
              <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-[#c9c7c7] cursor-pointer relative bg-[#394bec]'></li>
            <li className='w-8 h-8 rounded-full ring-1 ring-[#c9c7c7] cursor-not-allowed relative bg-[#39eb60]'>
            <div className='absolute w-10 h-[2px] bg-[#d2b48c] rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </li>
        </ul>

        <h4 className='font-medium'>Choose a size</h4>
        <ul className='flex items-center gap-3'>
          <li className='ring-1 ring-[#d2b48c] text-[#76d7ea] rounded-md py-1 px-4 text-sm cursor-pointer'>
            Small
          </li>
          <li className='ring-1 ring-[#d2b48c] text-[white] bg-[#76d7ea] rounded-md py-1 px-4 text-sm cursor-pointer'>
            Medium
          </li>
          <li className='ring-1 ring-[#d2b48c] text-[white] bg-[#34ddf1] rounded-md py-1 px-4 text-sm cursor-not-allowed'>
            Large
          </li>
        </ul>
    </div>
  )
}

export default CustomizeProducts