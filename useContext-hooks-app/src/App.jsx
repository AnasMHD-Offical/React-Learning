//useContext() : React hooks that allow you to share values between multiple levels of components without passing props through each level

//PROVIDER COMPONENT 
//1. import {createContext} from "react"
//2. export const myContext = createContext()
//3. <myContext.Provider value={value}>
//     <Child/>
//    <myContext.Provider>

//CONSUMER COMPONENT 
// 1.import React ,{useContext} from "react"
//   import {myContext} from "./ComponentA"
// 2. cont value = useContext(myContext)



import ComponentA from "./componentA"
function App() {
    return(
      <>
      <ComponentA/>
      </>
    )
}

export default App
