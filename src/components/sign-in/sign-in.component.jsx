import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

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
                <h2 className='title'>I already have an account</h2>
                <span>Signin with your email and password</span>
    
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' />
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <button>Signin with Google</button>
                </form>
            </div>
        )
    }
}
export default SignIn
