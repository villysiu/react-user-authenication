import { useState,useEffect } from "react"
const PrivateText=({currUser})=>{
    const [message, setMessage]=useState(null)
    const getText=async ()=>{
        try {
            const response=await fetch("http://localhost:3000/private/test", {
                method: "get",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                }
            })
            const data=await response.json()
            if(!response.ok) throw data.error
            setMessage(data.message)
        }
        catch(error){
            console.log("error", error)
            setMessage(error)
        }
    }
    useEffect(()=>{
        getText()
    },[currUser])
    return(
        <div>{message}</div>
    )
}
export default PrivateText