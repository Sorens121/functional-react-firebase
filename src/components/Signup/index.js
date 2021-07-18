import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';

function Signup() {
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()

    const { signup } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function handleSubmit(e) {
        e.preventDefault()

        //Validations
        if(password.current.value !== confirmPassword.current.value){
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(email.current.value, password.current.value)
        }
        catch {
            setError('Failed to create an account')
        }
        
        //console.log(email, password, confirmPassword)
        setLoading(false)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 style={{'textAlign': 'center'}}>Sign Up</h2>
                {error && <div className="error-message">{error}</div>}

                <label>Email</label>
                <input type="email" ref={email} />
                
                <label>Password</label>
                <input type="password" ref={password} />
                
                <label>Confirm Password</label>
                <input type="password" ref={confirmPassword}/>

                <button disabled={loading} type="submit">Sign Up</button>
            </form>
            <div className="link-container">
                <p>Already have an Account?<Link to="/login">Sign-In</Link></p>
            </div>
        </div>
    )
}

export default Signup;
