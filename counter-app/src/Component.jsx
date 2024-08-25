import React,{useState} from 'react'

// const age = 0 
function Component(props){
    const [name,setName] = useState("Guest")
    const [age,setAge] = useState(0)
    const [isEmployed,setIsEmployed] = useState(false)
    const updateName = () =>{
        setName(props.name)
        console.log(name);
    }
    const updateAge = ()=>{
        setAge(age + 1)
        console.log(age + 1);
        
    }
    const updateIsEmployed = ()=>{
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>setName</button>
           
            <p>Age : {age}</p>
            <button onClick={updateAge}>Increment Age</button>
            
            <p>Is Employed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateIsEmployed}>Set isEmployed</button>
        </div>
    )
}
export default Component