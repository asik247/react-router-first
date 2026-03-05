import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    // use navigation code start here;
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-full h-100vh'>
                {isNavigation && <h1>Loadding...</h1>}
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;