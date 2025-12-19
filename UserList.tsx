import React from 'react';
import {useApi} from './useApi';
import {User} from './types';

const UserList = () => {
    const {data,status, error} = useApi<User[]>('/users');


    if (status === 'loading') return<p>Loading...</p>
    if (status === 'error') return<p>Error: {error}</p>


    return(
        <ul>
            {data?.map(user => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    )
}

export default UserList;