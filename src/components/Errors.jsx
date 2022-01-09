import React from 'react';
const Errors = ({children}) => {
    return ( 
        <div className='mt-2 bg-red-600 text-white font-light p-1 pl-3 uppercase rounded-lg border-2 border-red-800'>
            {children}
        </div>
     );
}
 
export default Errors;