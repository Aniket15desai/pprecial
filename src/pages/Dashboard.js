import React from 'react'
import { UserAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = UserAuth();

    return (
        <div className='p-8'>
            <h1 className='text-start text-[61px] font-bold'>Dashboard</h1>
            <div>
                <p className='text-[24px] font-medium mt-4'>Welcome, {user?.displayName}</p>
            </div>
        </div>
    )
}

export default Dashboard