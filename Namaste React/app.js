import React from "./new-react-app/node_modules/react"
import ReactDOM from "./new-react-app/node_modules/react-dom"

const heading1 = React.createElement("h1",{id:"hello1"},"Hello World")
const heading2 = React.createElement("h2",{id:"hello2"},"Hello World 2")

const container = React.createElement("div",{id:"container"},[heading1,heading2])

    console.log(container);

    const root = ReactDOM.createRoot(document.getElementById("root"))

    //passing a react element inside the root 
    root.render(container)
    // root.render(heading2)



//How useState works ? 
// function useState(initialValue) {

//     var _var = initialValue
//     function state() {
//         return _var
//     }
//     function setState(newVal) {
//          _var = newVal
//     }
//     return [state, setState]
// }

// var [hey, setHey] = useState(0)
// console.log(hey());
// setHey(1)
// console.log(hey());
