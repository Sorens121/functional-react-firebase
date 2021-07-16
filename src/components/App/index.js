import React from 'react'
import { AuthProvider } from '../Context/AuthContext';
import Signup from '../Signup'

function App() {
    return (
        <AuthProvider>
            <div>
                <h1>App component</h1>
                <Signup/>
            </div>
        </AuthProvider>
    )
}

export default App;
