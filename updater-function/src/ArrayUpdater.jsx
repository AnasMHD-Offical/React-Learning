import React,{useState} from "react"

function ArrayUpdater(){
    const [foods,setFoods] = useState(["Apple","Orange"])

    function handleAddFood(e){
        const newFood  = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""

        setFoods(f => [...f,newFood])
    } 
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i) => i !== index))
    } 
    return(
        <div>
            <h2>List of foods</h2>
            <ul style={{cursor:"pointer"}}>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter the food"/>
            <button type="submit" onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default ArrayUpdater