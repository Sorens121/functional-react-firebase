import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const email = useRef()
    const password = useRef()

    const [error, setError] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if(email.current.value === ''){
            return setError('Email is required')
        }

        if(password.current.value === ''){
            return setError('Password is required')
        }
    }

    return (
        <div className="container" style={{'height': '360px'}}>
            <h2 style={{'textAlign': 'center'}}>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" ref={email} required />
                
                <label htmlFor="">Password</label>
                <input type="password" ref={password} required />

                <button type="submit">Sign-In</button>
            </form>
            <div className="link-container">
                <p>Need an Account? <Link to="/signup">Sign-Up</Link></p>
            </div>
        </div>
    )
}

export default Login;
