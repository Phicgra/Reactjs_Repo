import React, { useState } from 'react'

export const Counter = () => {
    let [nums, setNums] = useState(0);
    
    let  reSet =() => {
        setNums(nums = 0)
    }

    let handlClick = () => {
        setNums (nums +1);
    }

  return (
    <div>
        <h1>Number incrementing </h1>
        <p>Here, we increase a paticular given number by 1 <b>( i.e given number ++1 )</b></p>
        <p>Count -- {nums}</p>
        <button onClick={handlClick}>Increment</button>
        <button onClick={reSet}>Reset</button>

    </div>
  )
}

export default Counter