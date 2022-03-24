import React from 'react';
import Navbar from './navbar'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar clas="bg-black text-white"></Navbar>
            {children}
        </div>
    );
};

export default Layout;