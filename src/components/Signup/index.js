import React, {useRef, useState} from 'react';

import { useAuth } from '../Context/AuthContext';

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPassRef = useRef()

    const { signup, currentUser } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(e) {
        e.preventDefault()

        //Validations
        if(passwordRef.current.value !== confirmPassRef.current.value){
            return setError('Password donot match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        }
        catch {
            setError('Failed to create an account')
        }

        setLoading(false)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                {JSON.stringify(currentUser)}
                {error && <div className="error-message">{error}</div>}

                <label>Email</label>
                <input type="email" ref={emailRef} required />
                
                <label>Password</label>
                <input type="password" ref={passwordRef} required/>
                
                <label>Confirm Password</label>
                <input type="password" ref={confirmPassRef}/>

                <button disabled={loading} type="submit">Sign Up</button>
            </form>
            <div className="link-container">
                <p>Already have an Account? Sign-In</p>
            </div>
        </div>
    )
}

export default Signup;
