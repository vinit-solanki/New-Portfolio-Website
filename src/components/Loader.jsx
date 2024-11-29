import React from 'react'
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/Animation - 1732790445210.json';
function Loader() {
  return (
    <div className='w-screen min-h-screen bg-deepSpace flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-gray-200'>
            <div className='w-72 h-72 rounded-full overflow-hidden flex justify-center items-center'>
            <Lottie animationData={loaderAnimation} loop={true} width={28} height={28} style={{ margin: 'auto' }} />
            </div>
            <div className='text-center p-2 text-center text-lg animate-pulse'>Wait for 3000ms...</div>
        </div>
    </div>
  )
}

export default Loader