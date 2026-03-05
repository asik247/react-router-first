import React from 'react';
import { useLoaderData } from 'react-router';

const UsersDetails = () => {
    const detailsData = useLoaderData()
    // console.log(detailsData);
    return (
        <div>
            {/* <h1>Users Details</h1> */}
            <div className='border-2 border-red-500 p-4 mb-4 w-11/12 mx-auto mt-20'>
                <p>{detailsData.address.street}</p>
                <h2>{detailsData.name}</h2>
                <h1>{detailsData.address.city}</h1>
            </div>
        </div>
    );
};

export default UsersDetails;
/**
 * {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
        }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
    }
}
 */