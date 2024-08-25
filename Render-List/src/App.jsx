import List from "./List.jsx"

function App() {

  const fruits = [
      {id:1,name:"Apple",Kcal:120},
      {id:2,name:"Orange",Kcal:89},
      {id:3,name:"Pineapple",Kcal:37},
      {id:4,name:"Banana",Kcal:105},
      {id:5,name:"Lichi",Kcal:80},
  ]
  const Vegiees = [
      {id:1,name:"Tomato",Kcal:120},
      {id:2,name:"Cabbagge",Kcal:89},
      {id:3,name:"Potato",Kcal:37},
      {id:4,name:"Cucumber",Kcal:105},
  ]



  return(
   <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/>  : null}
    {Vegiees.length > 0 ? <List items={Vegiees} category="Vegitables"/> : null}    
   </>
  )
}

export default App
