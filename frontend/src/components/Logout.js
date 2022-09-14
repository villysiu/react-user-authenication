const Logout =({setCurrUser})=>{
    const logout=async (setCurrUser)=>{
        try {
            const response=await fetch("http://localhost:3000/logout",{
                method: "delete",
                headers: {
                    "content-type": "application/json",
                    "authorization": localStorage.getItem("token")
                },
            })
            if(!response.ok) throw Error
            localStorage.removeItem("token")
            setCurrUser(null)
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleClick=e=>{
        e.preventDefault()
         logout(setCurrUser)
    }
    return (
        <div>
            <input type="button" value='Logout' onClick={handleClick}/>
        </div>
    )
}
export default Logout