import React, {useContext, useEffect, useState} from 'react';

import { auth } from '../firebase/firebase';

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()

    function sigup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const listener = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return listener
    }, [])

    const value = {
        currentUser,
        sigup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

