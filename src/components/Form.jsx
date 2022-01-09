import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Errors from './Errors';
const FormComponent = () => {

    //YUP schema
    const newClientSchema = Yup.object().shape({ 
        clientName: Yup.string()
                        .min(3, "Name is too short")
                        .max(20, "Name is too long")
                        .required("Client's name is mandatory"), 
        clientCompany: Yup.string()
                          .required("Client's company name is mandatory"), 
        clientEmail: Yup.string()
                  .email("Must be a valid email address")
                  .required("Client's email address is mandatory"), 
        clientPhoneNumber: Yup.number()
                            .integer("Phone number must be numbers only")
                            .positive("Phone number must be numbers only")
                            .typeError("Phone number must be numbers only"), 
        clientNote: ''})

    // const formik = useFormik({
    //     initialValues: {
    //       clientName: '',
    //       clientCompany: '',
    //       email: '',
    //       phoneNumber: '',
    //       clientNote: ''
    //     },
    //     onSubmit: values => {
    //       //alert(JSON.stringify(values, null, 2));
    //     },
    //   });
    const handleSubmit = values => {
        console.log(values);
    }
    return ( 
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h2 className='text-gray-600 font-bold text-xl uppercase text-center mb-5'>Add Client</h2>
            {/* <form
                onSubmit={formik.handleSubmit}
            >
                <label
                    className="labelStyles"
                    htmlFor="clientName"
                >Client's Name
                </label>
                <input
                    className="inputStyles"
                    id="clientName"
                    name="clientName"
                    type="text"
                    placeholder='Name of the client'
                    onChange={formik.handleChange}
                    value={formik.values.clientName}
                />
                <label
                    className="labelStyles" 
                    htmlFor="clientCompany"
                >Client's Company
                </label>
                <inputisSubmittingy"
                    name="clientCompany"
                    type="text"
                    placeholder='Company of the client'
                    onChange={formik.handleChange}
                    value={formik.values.clientCompany}
                />
                <label
                    className="labelStyles" 
                    htmlFor="email"
                >Email Address
                </label>
                <input
                    className="inputStyles"
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email of the client'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label
                    className="labelStyles" 
                    htmlFor="phoneNumber"
                >Phone number
                </label>
                <input
                    className="inputStyles"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    placeholder='Phone number of the client'
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                />
                <label
                    className="labelStyles" 
                    htmlFor="clientNote"
                >Client's note
                </label>
                <textarea
                    className="inputStyles resize-none"
                    id="clientNote"
                    name="clientNote"
                    type="text"
                    placeholder='Note about the client'
                    onChange={formik.handleChange}
                    value={formik.values.clientNote}
                />  
                <input 
                    type="submit"
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                    value='Submit'
                />

            </form> */}
            <Formik
                initialValues={{ clientName: '', clientCompany: '', clientEmail: '', clientPhoneNumber: '', clientNote: ''}}
                onSubmit={(values) => handleSubmit(values)}
                validationSchema={newClientSchema}
            >
            {(  {errors, touched, isSubmitting} ) => 
                (
                    <Form>
                        <label
                            className="labelStyles"
                            htmlFor="clientName"
                        >Client's Name
                        </label>
                        <Field 
                            type="text" 
                            name="clientName"
                            className="inputStyles"
                        />
                        {(errors.clientName && touched.clientName) && (<Errors>{errors.clientName}</Errors>) }
                        <label
                            className="labelStyles" 
                            htmlFor="clientCompany"
                        >Client's Company
                        </label>
                        <Field 
                            type="text" 
                            name="clientCompany" 
                            className="inputStyles"
                        />
                        {(errors.clientCompany && touched.clientCompany) && (<Errors>{errors.clientCompany}</Errors>) }
                        <label
                            className="labelStyles" 
                            htmlFor="email"
                        >Email Address
                        </label>
                        <Field 
                            type="email" 
                            name="clientEmail" 
                            className="inputStyles"
                        />
                        {(errors.clientEmail && touched.clientEmail) && (<Errors>{errors.clientEmail}</Errors>) }
                        <label
                            className="labelStyles" 
                            htmlFor="clientPhoneNumber"
                        >Phone number
                        </label>
                        <Field 
                            type="tel" 
                            name="clientPhoneNumber" 
                            className="inputStyles"
                        />
                        {(errors.clientPhoneNumber && touched.clientPhoneNumber) && (<Errors>{errors.clientPhoneNumber}</Errors>) }
                        <label
                            className="labelStyles" 
                            htmlFor="clientNote"
                        >Client's note
                        </label>
                        <Field 
                            as="textarea" 
                            type="text" 
                            name="clientNote" 
                            className="inputStyles resize-none"
                        />
                        <input
                            disabled={isSubmitting} 
                            type="submit"
                            className={`mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg hover:bg-blue-600 transition-all 
                            ${isSubmitting && 'bg-gray-600 hover:bg-gray-600' }`}
                            value='Submit'
                        />
                    </Form>
                )}

            </Formik>
        </div>
     );
}
 
export default FormComponent;