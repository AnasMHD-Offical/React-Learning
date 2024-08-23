//porps : read-only property that are shared between components.
//        A parent component can send data to a child component
// using in App.jsx :  <Component key=value>

import Student from './Students.jsx'
import Card from './Card.jsx'
import img from './assets/img1.jpg'
function App() {
  return(
    <div>
      {/* <Card name="Anas Muhammed" image={img}/>
      <Card name="Amal Krishna" image={"http://via.placeholder.com//150"}/>
      <Card name="Athul Krishna Ks" image={"http://via.placeholder.com//150"}/>
      <Card name="Muhammed Anees" image={"http://via.placeholder.com//150"}/>
      <Card name="Muhammed Nuaim" image={"http://via.placeholder.com//150"}/>
      <Card name="Shahid Noushad" image={"http://via.placeholder.com//150"}/>
      <Card name="Vishnu C" image={"http://via.placeholder.com//150"}/> */}
    
      <Student age={18} isStudent={true}  name="Anas Muhammed"/>
      <Student age={23} isStudent={false}  name="Athul Krishna K S"/>
      <Student age={18} isStudent={true}  name="Muhammed Nuaim"/>
      <Student age={18} isStudent={true}  name="Muhammed Anees"/>
      <Student age={20} isStudent={false}  name="Shahid Noushad"/>
      <Student age={20} isStudent={true}  name="Vishnu C"/>
      <Student age={38} isStudent={false} name="Shankaran Pillai"/>
    </div>
  )
}

export default App
