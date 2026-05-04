import {useState} from "react"
export const useAuth= ()=>{
    const [ auth, setAuth]= useState(false)
    const logIn=()=>{
        setAuth(true)
    }
    const logOut=()=>{
        setAuth(false)
    }
    return {auth, logIn, logOut}
}