import { useContext } from "react"
import { counterContext } from "../context/context"


export const ButtonOP = ()=>{

    const value = useContext(counterContext)

    return(
           <>
           <h1>values is Of Button OP {value}</h1></>
    )

}