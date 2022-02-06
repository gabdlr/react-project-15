import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const ViewClient = () => {
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
        loading ? 
        (   
            <Spinner/>
        )
        : 
        Object.keys(client).length === 0 ?   
        (
            <p className='descriptionParagraph'>
                <span>Invalid client id</span>
            </p>
        ) 
        : 
        (
            <div>
                <h1 className='font-black text-4xl text-blue-900'>View client</h1>
                <p className='mb-3'>Client's information:</p>         
                <p className='descriptionParagraph'>
                    <span>Client's name:</span> {client.clientName}
                </p>
                <p className='descriptionParagraph'>
                    <span>Client's email:</span> {client.clientEmail}
                </p>
                <p className='descriptionParagraph'>
                    <span className=' uppercase font-bold text-gray-800'>Client's phone number:</span> {client.clientPhoneNumber ?? ''}
                </p>
                <p className='descriptionParagraph'>
                    <span>Client company:</span> {client.clientCompany}
                </p>
                <p className='descriptionParagraph'>
                    <span>Client's note:</span> {client.clientNote ?? ''}
                </p>
            </div>
        ) 
    )
     
}
 
export default ViewClient;