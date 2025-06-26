import React from 'react'
import Header from '../components/common/Header'
import { useAuth } from '../hooks/useAuth'

const HomePage = () => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div>
            <Header></Header>
            <p>Home Page</p>
        </div>
    )
}

export default HomePage