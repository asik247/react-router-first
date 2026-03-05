import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    // console.log(user);
    const {id,name,username,email} = user;
    return (
        <div>
          <div className='border-2 border-green-500 p-4 mb-4'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{username}</p>
            
            <Link to={`/users/${id}`}>
             <button className='btn'>Details</button>
             </Link>
          </div>
        </div>
    );
};

export default User;
/**
 * {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
        }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
    }
}
 */