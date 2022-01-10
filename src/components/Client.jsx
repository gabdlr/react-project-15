import React from 'react';
import { useNavigate } from 'react-router-dom';

const Client = ({client}) => {
    const navigate = useNavigate();
    const {clientName, clientCompany, clientEmail, clientPhoneNumber, clientNote, id} = client;
    return (
        <tr className='border-b hover:bg-gray-50 pb-5'>
            <td className='td'>{clientName}</td>
            <td className='td'>
                <p><span className='clientContactData'>Email: </span>{clientEmail}</p>
                <p><span className='clientContactData'>Phone number: </span>{clientPhoneNumber}</p>
            </td>
            <td className='td'>{clientCompany}</td>
            <td>
                <button 
                    className='actionsButton bg-yellow-500 hover:bg-yellow-600 '
                    onClick={() => navigate(`/clients/${id}`)}
                >View
                </button>
                <button 
                className='actionsButton bg-blue-600 hover:bg-blue-700 '
                onClick={() => navigate(`/clients/edit/${id}`)}
                >Edit
                </button>
                <button className='actionsButton bg-red-600 hover:bg-red-700 mb-1'>Delete</button>
            </td>
        </tr> 
     );
}
 
export default Client;