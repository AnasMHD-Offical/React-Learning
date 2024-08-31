import { useState } from "react"
import ComponentB from "./componentB"
import { createContext } from "react"
export const userContext  = createContext()

function ComponentA(){

    const [user,setUser] = useState("AnasMHD")
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h3>{`Hello ${user}`}</h3>
            <userContext.Provider value={user}>
                <ComponentB user={user} />
            </userContext.Provider>
            
            
        </div>
    )
}
export default ComponentA