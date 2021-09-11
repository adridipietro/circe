import React, {useState} from 'react'

export default function Login() {
    const [email, password] = useState('')
    const [state, setState] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    
    const handleChange = (e) => {
      setState({[e.target.name]: e.target.value})
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={handleChange} value={email} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} value={password}/>
                </div><br></br>
                <button type="submit" value="Login">Login</button>
           </form>
            
        </div>
    )
}
