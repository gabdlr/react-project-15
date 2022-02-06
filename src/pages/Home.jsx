import React, { useEffect, useState } from 'react';
import Client from '../components/Client';
const Home = () => {

    const [clients, setClients] = useState([]);
    useEffect(()=>{
        const getClientsFromAPI = async () => {
            try {
                const url = import.meta.env.VITE_API_URL;
                const response = await (await fetch(url)).json();
                setClients(response);
            } catch (error) {
                console.log(error)
            }
        }
        getClientsFromAPI();
    },[]);

    const handleDeleteClient = (id) => {
        const confirmDelete = confirm("Are you sure you want to delete this client?");
        if(confirmDelete){
            try {
                const url = import.meta.env.VITE_API_URL + id;
                fetch(url, {
                    method:'DELETE',
                    headers: {'Content-Type': 'application/json'},
                });
                const clientsAfterDeletion = clients.filter(client => client.id !== id );
                setClients(clientsAfterDeletion);
            } catch (error) {
                console.log(error);
            }
        }
    }
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
                            handleDeleteClient={handleDeleteClient}
                        />
                    ))}
                </tbody>
            </table>
        </>
     );
}
 
export default Home;