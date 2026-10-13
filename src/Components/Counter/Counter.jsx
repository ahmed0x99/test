import React, { useEffect, useState } from 'react'

export default function Counter() {
    // Hooks --- useState , useEffect
    const [count, setCount] = useState(0)


    // Mounting , Updating , UnMounting

    // at-least Works Once
    useEffect(() => {
        if(count == 0)
            return
        // Any-Code
      console.log("Updating:  " + count)

      return () => {
        
      }
      
    }
     ,[count] )




    return (
        <div className=' border-gray-700 w-1/4 h-80 p-3 mx-auto flex flex-col justify-center content-center items-center gap-1 rounded-2xl'>
            <p className='text-lg font-bold'>Counter: {count} </p>
            <button className='bg-blue-500 text-white w-1/2 p-2 rounded' onClick={() => {setCount(count + 1)}}> + </button>
            <button className='bg-blue-500 text-white w-1/2 p-2 rounded' onClick={() => { setCount(count - 1)}} > - </button>
        </div>
    )
}
