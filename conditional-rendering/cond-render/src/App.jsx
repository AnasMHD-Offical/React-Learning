//Conditional Rendering :  Allow you to control what gets rendered in your application based on certain conditions 
//                         (Show,hide,or change components)

import UserGreeting from "./UserGreeeting"


function App() {
  return(
    
    <div>
    
    <UserGreeting isLoggedIn={true} username="Anas Muhammed"/>
    <UserGreeting isLoggedIn={true}/>
    <UserGreeting/>
    </div>
  )
}

export default App
