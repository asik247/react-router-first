import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    // use navigation code start here;
    // const navigation = useNavigation();
    // const isNavigation = Boolean(navigation.location);

    // best practics use navgition;
    const navgation = useNavigation();
    const isNavgation = navgation.state === "loading";
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full h-100vh'>
{/* 
                {isNavigation && <h1 className='font-bold text-3xl'>Loadding...</h1>} */}

            {
                isNavgation && <h1 className='font-bold text-3xl'>Loading....</h1>
            }

                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;