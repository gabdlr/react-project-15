import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation().pathname;
    let highlightCurrentRoute = (path) => {
        return path === location ? 'text-blue-300' : 'text-white'
    }
    return (
        <div className='md:flex md:min-h-screen overflow-scroll'> 
            <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white'>CRM Clientes</h2>
                <nav className='mt-10'>
                    <Link 
                        className={`text-white text-2xl block mt-2 hover:text-blue-300 
                        ${highlightCurrentRoute('/clients/')}`}
                        to="/clients/"
                        >Clients    
                    </Link>
                    <Link
                        className={`text-white text-2xl block mt-2 hover:text-blue-300 
                        ${highlightCurrentRoute('/clients/new')}`}
                        to="/clients/new"
                    >New Client
                    </Link>
                </nav>
            </div>
            <div className='md:w-3/4 p-10'>
                <Outlet/>
            </div>   
        </div>
    );
}
 
export default Layout;