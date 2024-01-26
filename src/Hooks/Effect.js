import React from 'react'
import{ useState,useEffect} from "react"
function ExampleComponents(){
    const [data,setData]=useState(null);
    useEffect(() => {
        //the code will run after the components has rendered
        //ex of fetching data from JSONPlaceholder API endpoint
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(result => setData(result));
        //cleanup the function-run before the next effect or when the component unmounts
        return () => {
            //perform clean-up
        };
    },[]);//this effect will run only once


  return (
    <div>
        {data ? (
            <p>Data: {JSON.stringify(data)} </p>
        ) : (
            <p>Loading....</p>
        )
        }

    </div>
  );
}
export default ExampleComponents;
