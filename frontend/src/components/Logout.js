const Logout =(props)=>{
    const handleClick=e=>{
        e.preventDefault()
        // logout()
    }
    return (
        <div>
            <input type="button" value='Logout' onClick={handleClick}/>
        </div>
    )
}
export default Logout