'use client'

import React, { useState } from 'react'
import menu from '../../menu'

export default function MenuCard() {
  const [categories, setCategories] = useState(menu.map(item => item.category))
  const uniqueCategories = [...new Set(categories)]

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenu = menu.filter(item => selectedCategory === 'All' || item.category === selectedCategory)



  return (
    <div>
      <div className='flex items-center  justify-center gap-4 mt-10'>
        <button
          onClick={() => setSelectedCategory('All')}
          className={selectedCategory === 'All'? 'selected' : ''}>All</button>
        {uniqueCategories.map((item, index) => {
          return <button
            onClick={() => setSelectedCategory(item)}
            key={index}
            className={selectedCategory === item ? 'selected' : ''}
          >
            {item}
          </button>
        })}
      </div>
      <div className='container mx-auto px-3 gap-4 mt-10 grid grid-cols-[repeat(auto-fit,minmax(540px,1fr))] grid-flow-row auto-rows-[215px] '>
        {
          filteredMenu.map(item => {
            return <div className='flex gap-5  my-5 px-2' key={item.id}>
              <div>
                <img className='w-[175px] h-[175px] object-cover rounded-[10px] border-[0.25rem] border-solid border-black' src={item.img} />
              </div>
              <div className='flex-1 items-center'>
                <div className='flex justify-between border-b border-b-black pb-2'>
                  <h4 className='text-[#e00a00] text-2xl'>
                    {item.title}
                  </h4>
                  <span className='text-[#e00a00] text-2xl'>
                    {item.price}
                  </span>
                </div>
                <div className='pt-5 text-lg'>
                  {item.desc}
                </div>
              </div>

            </div>
          })
        }
      </div>
    </div>
  )
}
