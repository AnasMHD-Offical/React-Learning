//React hooks : The special functions that allow functional components to use React features without writing class components 
//(useState , useEffect, useContext ,useReducer ,useCallback and many more..)

//useState() = A react hook that allows the creation of a stateful variable AND a setter function to update its values in the Virtual DOM. [name,setName] 
// import Component from "./Component"
import Counter from "./Counter"
function App() {
  return(
    <>
    {/* <Component name = "Anas Muhammed"/> */}
    <Counter/>
    </>
  )
}

export default App
