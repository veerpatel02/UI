import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute top-0 left-0 h-full w-full bg-red-300 p-8 flex flex-col justify-between' >
         <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center text-2xl font-semibold'>1</h2>
         <div>
            <p className='text-lg leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat iure in ullam eum culpa nostrum!</p>
         
         <div>
            <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>Satisfied</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'> <i className="ri-arrow-right-line"> </i></button>
         </div>
         </div> 
        </div>
    </div>
  )
}

export default RightCard
