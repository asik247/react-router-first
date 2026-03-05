import React, { use } from 'react';

const Users2 = ({ promiseUsers }) => {
    // console.log(promiseUsers);
    const user2Promise = use(promiseUsers);
    console.log(user2Promise);
    const { name, email, username } = user2Promise;
    return (
        <div>
            <div className='border-2 border-gray-300 p-4'>
                <h1>{email}</h1>
                <p>{username}</p>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Users2;