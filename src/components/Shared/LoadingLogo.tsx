import React from 'react'
import Image from 'next/image'

type Props = {
    size?: number;
}

const LoadingLogo = ({size= 100 }: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
        <Image
            src="/logo.svg"
            alt="Loading Logo"
            width={size}
            height={size}
            className='animate-pulse duration-800'
            
        />
        <p className='text-gray-500 mt-4'>Loading...</p>
    </div>
  )
}

export default LoadingLogo