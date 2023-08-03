'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className=''>
            <div className='flex flex-col items-center'>
            <h1 className='text-5xl'>Something went wrong!....</h1><br />
            <p>How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case...</p>
            <button
                className='border-white border-solid border-2 box-border h-10 w-28 mx-10 my-5 bg-red-500'
                onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
                }
            >
                Try again
            </button>
            </div>
        </div>
    </div>

  )
}