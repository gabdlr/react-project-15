import React, { useEffect, useState } from 'react';
import Client from '../components/Client';
const Home = () => {
    const [clients, setClients] = useState([]);
    useEffect(()=>{
        const getClientsFromAPI = async () => {
            try {
                const url = "http://localhost:4000/clients";
                const response = await (await fetch(url)).json();
                setClients(response);
            } catch (error) {
                console.log(error)
            }
        }
        getClientsFromAPI();
    },[])
    return ( 
        <>
            <h1 className='font-black text-4xl text-blue-900'>Clients</h1>
            <p className='mt-3'>Manage your clients:</p>
            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map( client => (
                        <Client
                            key={client.id}
                            client={client}
                        />
                    ))}
                </tbody>
            </table>
        </>
     );
}
 
export default Home;