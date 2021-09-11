import React, { Component } from 'react'

export default class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
      
      
    handleSubmit = (e) =>{
        e.preventDefault()
                
    }
      
      
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
      
    render () {
        const { name, email, password } = this.state
        return (
            <div className="signup-container">
            <h1>Signup</h1>
            <form className="signup-form" onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={name}/>
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={email}/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
                </div><br></br>
                <button type="submit">Signup</button>
            </form>
            </div>
        )
      
    }
      
}


