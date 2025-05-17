import { useState } from "react"
import { useNavigate } from "react-router"

interface mainAppState{
    open: boolean,
    mode: string,
}

const useMainApp = ()=>{
const navigator= useNavigate()
    const [{open,mode},setState]=useState <mainAppState> ({open:false,mode:"light"})
    const handelOpen=(val:boolean)=>{

        setState((prev)=>({
            ...prev,
            open:val
        }))
    }


   
    return[{open,mode},{handelOpen}]
}
export default useMainApp