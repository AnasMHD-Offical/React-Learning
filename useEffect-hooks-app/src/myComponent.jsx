// useEffect() = React hook that tells React Do SOME CODE WHEN (pick one) : 
//               This component re-render 
//               This component mounts 
//               This state of a value 

// useEffect(function , [dependencies])  <<<=== Syntax

//examples >>> 1.useEffect(()=>{})  Runs after every re-render
//examples >>> 1.useEffect(()=>{},[])  Runs only on mount
//examples >>> 1.useEffect(()=>{},[value])  Runs on mount + when value changes

//Uses >>>

//#1 Event Listerners
//#2 Subsription (Real-time updates)
//#3 DOM Manipulation
//#4 Fetching Data From an API
//#5 Clean up when a component unmounts
import React,{useState,useEffect} from "react";

// function MyComponent(){
//     const [count,setCount] = useState(0)
//     const [color,setColor] = useState("green")

//     useEffect(()=> {
//         document.title = `Count : ${count} ${color}`
//         // document.title = `My counter program`

//     },[count,color])
//     function addCount(){
//         setCount(c => c + 1)
//     }
//     function SubCount(){
//         setCount(c => c - 1)
//     }
//     function changeColor(){
//         setColor(c => c === "green" ? "red": "green")
//     }
//     return(
//         <div>
//         <p style={{color:color}}>Count:{count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={SubCount}>Sub</button> <br />
//         <button onClick={changeColor}>Chnage Color</button>
//         </div>
//     )
// }

function MyComponent(){
    const [width,setWidth] = useState(window.innerWidth)
    const [Height,setHeight] = useState(window.innerHeight)

    // window.addEventListener("resize",handleResize)
    // console.log("Event listerner added")

    //Here we are trying to add one event listerner to listen the window resize but it will added like in every re-render
    //So for elemenating this we use useEffect

    useEffect(()=>{
     window.addEventListener("resize",handleResize)
       console.log("Event listerner added")

       return()=>{
        window.removeEventListener('resize',handleResize)
        console.log("Event listerner removed");
        
       }
    },[])

    useEffect(()=>{
        document.title = `size:${width} X ${Height}`
    },[width,Height])

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(
        <>
        <p>WIndows Width : {width}</p>
        <p>WIndows Height : {Height}</p>
        </>
    )
}
export default MyComponent
