import React from 'react';
import Navbar from './navbar'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default Layout;