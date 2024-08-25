import React, {useState} from "react"

function ColorPicker(){

    const [color,setColor] = useState("#ffffff")

    function handleColorChange(event){
        setColor(event.target.value)
    }
 return(
    <div className="ColorPicker-container">
        <h1 className="ColorPicker-H1">Color Picker</h1>
        <div className="Color-display" style={{backgroundColor:color}}>
            <p className="Color-text">Selected Color : {color}</p>
        </div>
        <label htmlFor="" className="ColorSelect-label">Select a Color</label>
        <input className="ColorSelector" type="color" value={color} onChange={handleColorChange}/>
    </div>
 )
}

export default ColorPicker