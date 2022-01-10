import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/Form';

const EditClient = () => {
    const {id} = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ client, setClient ] = useState({});
    useEffect(()=>{
        const getClientFromAPI = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`;
                const response = await (await fetch(url)).json();
                setClient(response);
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(()=>{
                    setLoading(false);
                }, 1000)
            }
        }
        getClientFromAPI();
    },[]);
    return ( 
        <>
            <h1 className='font-black text-4xl text-blue-900'>Edit Client</h1>
            <p className='mt-3'>Edit this client fields:</p>
            <FormComponent
                client={client}
            />  
        </>
     );
}
 
export default EditClient;