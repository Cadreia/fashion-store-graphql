import React, { Component } from 'react'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render () {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
    
                <form onSubmit={this.handleSubmit}>
                    <input name='email' type='email' required value={this.state.email} onChange={this.handleChange}></input>
                    <label>Email</label>
                    <input name='password' type='password' required value={this.state.password} onChange={this.handleChange}></input>
                    <label>Password</label>
                    <button type='submit'>Sign In</button>
                    <button>Signin with Google</button>
                </form>
            </div>
        )
    }
}
export default SignIn
