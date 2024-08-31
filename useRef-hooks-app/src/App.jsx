//useState() = Re-render the component when the state value changes

//useRef() = "use Reference " Does not cause re-render when its value changes.When you wnat a component to "remember" some information, but you don't want that information to trigger new renders.

// Use cases >>>>
//    1. Accessing/interacting with DOM elements
//    2. Handling Focus,Animations, and Transitions 
//    3. Managing Timer and Intervals
import MyComponent from "./useRef"
function App() {


  return (
   <>
   <MyComponent/>
   </>
  )
}

export default App
