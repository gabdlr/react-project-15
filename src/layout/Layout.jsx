import React from 'react';
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
        <> 
            <p>From layout</p>
            <Outlet/>
        </>
    );
}
 
export default Layout;