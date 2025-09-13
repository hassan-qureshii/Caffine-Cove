import React from 'react'

const CopyRight = () => {
  return (
    <div className='bg-primary py-5'>
       <p className='text-center text-white'>
        &copy; {new Date().getFullYear()} Caffine Cove. All rights reserved.
      </p>
    </div>
  )
}

export default CopyRight
