import React, { use } from 'react';

const Users2 = ({promiseUsers}) => {
    console.log(promiseUsers);
    const user2Promise = use(promiseUsers);
    console.log(user2Promise);
    const {name,email,username} = user2Promise;
    return (
        <div>
            <h1>{email}</h1>
            <p>{username}</p>
            <h3>{name}</h3>
        </div>
    );
};

export default Users2;