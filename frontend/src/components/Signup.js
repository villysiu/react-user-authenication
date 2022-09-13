import { useRef } from "react"

const Signup=()=>{
    
    const formRef = useRef()
    
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const user={
            "user":{
                email: data.email,
                password: data.password
            }
         }
         console.log(user)
        //  signup(user)
         e.target.reset()
    }
    return(
        <div>
        <form ref={formRef} onSubmit={handleSubmit}>
            Email: <input type="email" name='email' placeholder="email" />
            <br/>
            Password: <input type="password" name='password' placeholder="password" />
            <br/>
            <input type='submit' value="Submit" />
        </form>
    </div>

    )
    
}
export default Signup