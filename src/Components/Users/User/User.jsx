import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import Users2 from '../../Users2/Users2';

const User = ({user}) => {
    // console.log(user);
    const {id,name,username,email} = user;

    // fetch old way in this components load data;
    const promiseUsers = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=>res.json())
    // use state code start here;
    const [showInfo,setShowInfo] = useState(false)
    // visite hobe use navagate;
    const [vistiHome,setVisitHome] = useState(false)
    // user location jsut clg code here ;
    const location = useLocation();
    console.log(location);
    const handleToggle = ()=>{
        setShowInfo(!showInfo);
    }
    


    return (
        <div>
          <div className='border-2 border-green-500 p-4 mb-4'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{username}</p>
            
            <Link to={`/users/${id}`}>
             <button className='btn'>Details</button>
             </Link>
             {/* same card ar nise data load hobe */}

             <button onClick={handleToggle} className='btn btn-ghost'> {showInfo?"Hide":"Show"} Info</button>
             {
                showInfo && <Suspense fallback={<h1>Loadding...</h1>}>
                    <Users2 promiseUsers={promiseUsers}></Users2>
                </Suspense>
             }

            <button onClick={()=>setVisitHome(true)} className='btn btn-ghost'>Visit Home</button>
           
             
          </div>
             {/* conditionaly navigate kore home page jai ;;; useNavagate programmaly click korle chage hoy */}
          {
            vistiHome&& <Navigate to={'/'}></Navigate>
          }
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