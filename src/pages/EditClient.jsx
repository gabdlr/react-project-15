import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormComponent from '../components/Form';
import Errors from '../components/Errors';
import Spinner from '../components/Spinner';
const EditClient = () => {
    const {id} = useParams();
    const [ loading, setLoading ] = useState(true);
    const [ client, setClient ] = useState({});
    useEffect(()=>{
        const getClientFromAPI = async () => {
            try {
                const url = import.meta.env.VITE_API_URL + id;
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
            { loading ? (<Spinner></Spinner>) : client?.clientName ? 
            (<FormComponent
                client={client}
                loading={loading}
            />  ) : (<Errors>The client you've asked for is currently not available in our database.</Errors>)
            }
        </>
     );
}
 
export default EditClient;