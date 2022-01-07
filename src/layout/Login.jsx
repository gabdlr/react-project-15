import React from 'react';
import { Outlet } from 'react-router-dom';
const Login = () => {
    return ( 
        <>
            <p>From Login</p>
            <Outlet/>
        </>
     );
}
 
export default Login;