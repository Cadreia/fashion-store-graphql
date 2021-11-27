import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component {
   constructor() {
       super()
       this.state = {
           displayName: '',
           email: '',
           password: '',
           confirmPassword: ''
       }
   }

   handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
   }

   handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
   }

   render () {
       const { displayName, email, password, confirmPassword } = this.state
       return <div className='sign-up'>
           <h2 className='title'>I do not have an account</h2>
           <span>Sign up aith your Email and Password</span>

           <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' label='Name' value={displayName} onChange={this.handleChange} required />
                <FormInput name='email' type='email' label='Email' value={email} onChange={this.handleChange} required />
                <FormInput name='password' type='password' label='Password' value={password} onChange={this.handleChange} required />
                <FormInput name='confirmPassword' type='password' label='Confirm Password' value={confirmPassword} onChange={this.handleChange} required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
           </form>
       </div>
   }
}

export default SignUp
