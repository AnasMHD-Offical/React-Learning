import React,{useState , useEffect ,useRef} from "react"




function MyComponent(){

    // let [number,setNumber] = useState(0)
    // const ref = useRef(0)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(()=>{
        console.log("Component rendered");
        console.log(inputRef1);
        console.log(inputRef2);
        console.log(inputRef3);
        
        
    })

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Blue";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "Blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "Blue";
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }
    return(
        <>
        <button onClick={handleClick1}>Click : </button>
        &nbsp;
        <input type="text" ref={inputRef1}/> <br /> <br />
        <button onClick={handleClick2}>Click : </button>
        &nbsp;
        <input type="text" ref={inputRef2}/> <br /> <br />
        <button onClick={handleClick3}>Click : </button>
        &nbsp;
        <input type="text" ref={inputRef3}/> <br />
        </>
    )
}

export default MyComponent