// Update function : A function passed as an argument to setState() usaually 
//                  It Allow safe updates based on the previous state 
//                  Used with multiple state updates and asynchronus functions  
//                  Good practice to use updater functions

import React,{useState} from "react"


function Counter(){
    const [count , setCount] = useState(0)

    const increment = () =>{

        //It takes the PENDING states to calculate NEXT State 
        //React puts your updater function in a Queue
        //During the next render,it will call them in the same order
        setCount( preCount => preCount + 1)
        setCount( preCount => preCount + 1)
        setCount( preCount => preCount + 1)
    }
    const decrement = () =>{
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
    } 
    const reset = () =>{
        setCount(0)
    }

    return(
        <div className="count-card">
            
            <div className="display">
                <h3 className="count-display">{count}</h3>
            </div>
            <div className="btns">
                <button onClick={increment} className="count-btn">+</button>
                <button onClick={reset} className="count-btn">Reset</button>
                <button onClick={decrement} className="count-btn">-</button>
            </div>
        </div>
    )
}

export default Counter