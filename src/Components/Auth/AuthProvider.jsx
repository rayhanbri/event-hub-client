import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseInit';



const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    const userWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        createUser,
        setLoading,
        userWithGoogle,
        user,
        login,
        logOut,
        loading,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;