import ComponentD from "./componentD"
import React,{ useContext } from "react"
import { userContext } from "./componentA"

function ComponentC(){
    const user = useContext(userContext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h3>{`Hello again ${user}`}</h3>
            <ComponentD/>
        </div>
    )
}
export default ComponentC