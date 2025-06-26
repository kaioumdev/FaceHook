import React from 'react'
import Header from '../components/common/Header'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div>
            <p>Home Page</p>
            <Link to="/me">Go to Profile Page</Link>
        </div>
    )
}

export default HomePage