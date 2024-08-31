import React,{useState} from "react"

function ObjectUpdater(){

    const [car,setCar] = useState({year:2020,maker:"BMW",model:"M2"})

    function handleYearChange(event){
        setCar(c => ({...c,year: event.target.value}))
    }
    function handleMakerChange(event){
        setCar(c => ({...c,maker: event.target.value}))
    }
    function handleModelChange(event){
        setCar(c => ({...c,model: event.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is {car.year} {car.maker} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.maker} onChange={handleMakerChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    )

}

export default ObjectUpdater