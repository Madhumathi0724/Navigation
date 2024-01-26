import React from 'react'
import { useState , useCallback } from 'react' // or import React,{useState,useCallback} from 'react

const Callback = () => {
    //State using useState
    const [count , setCount]=useState(0);

    //Function that we want to memorize
    const handleClick = useCallback(() => {
        //Do something with the count
        console.log(`Button clicked. Count: ${count}`);
    },[count]);

  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  );
}
export default Callback;
