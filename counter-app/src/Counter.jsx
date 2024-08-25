import React,{useState} from "react"


function Counter(){
    const [count , setCount] = useState(0)

    const increment = () =>{
        setCount( count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
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