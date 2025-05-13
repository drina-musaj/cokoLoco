import React from 'react'
import Image from 'next/image'
import Toy from '@/public/swaying-toy.svg'
import TreeHouse from '@/public/treehouse.svg'

const Attention = () => {
  return (
    <div className='flex justify-around py-20 bg-[#17124C]'>
      <div>
      <Image src={Toy} alt='toy' className='swing'></Image>
      <h1 className='text-[62px] max-w-[252px] font-[poppins] font-semibold pt-40'>Have you given Coko enough 
        <span className='block font-[playfair] italic text-[78px] font-medium'>attention?</span>
      </h1>
      </div>
      <Image src={TreeHouse} alt='Tree House' className='pt-35'></Image>
    </div>
  )
}

export default Attention