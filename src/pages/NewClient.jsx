import React from 'react';
import FormComponent from '../components/Form';
const NewClient = () => {
    return ( 
        <>
            <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
            <p className='mt-3'>Complete all the fields to register a new client:</p>
            <FormComponent/>
        </>
     );
}
 
export default NewClient;