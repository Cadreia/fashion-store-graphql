import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component () {
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
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("Passwords don't match")
            return;
        }
        try {
            const { user } = await createUserWithEmailAndPassword(email, password)
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
       const {displayName, email, password, confirmPassword} = this.state
       return <div>
           <h2 className='title'>I do not have an account</h2>
           <span></span>

           <form onSubmit={this.handleSubmit}>
                <FormInput name='displayName' type='text' label='Name' value={displayName} onChange={this.handleChange} required />
                <FormInput name='email' type='text' label='Email' value={email} onChange={this.handleChange} required />
                <FormInput name='password' type='password' label='Password' value={password} onChange={this.handleChange} required />
                <FormInput name='confirmPassword' type='password' label='confirmPassword' value={confirmPassword} onChange={this.handleChange} required />
                <CustomButton>Sign Up</CustomButton>
           </form>
       </div>
   }
}

export default SignUp
