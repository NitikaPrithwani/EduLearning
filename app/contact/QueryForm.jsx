"use client";
import { useState } from 'react';

export default function QueryForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (formValues.name && formValues.email && formValues.subject && formValues.message) {
            console.log('Form Submitted', formValues);
            setFormValues({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <>
            <h2 className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto text-center font-bold text-2xl mt-4 mb-4 md:mt-12 md:mb-12">
                If you got any questions <br /> Please do not hesitate to send us a message
            </h2>
            <form className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto" onSubmit={handleSubmit}>
                <div className="md:flex mb-5 pt-8 grid grid-cols-1">
                    <input
                        type="text"
                        id="name"
                        value={formValues.name}
                        onChange={handleChange}
                        className="mb-5 me-5 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                        placeholder="Your Name"
                        
                    />
                    <input
                        type="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="mb-5 me-5 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                        placeholder="Your Email"
                        
                    />
                    <input
                        type="text"
                        id="subject"
                        value={formValues.subject}
                        onChange={handleChange}
                        className="mb-5 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                        placeholder="Subject"
                        
                    />
                </div>
                <textarea
                    id="message"
                    rows="4"
                    value={formValues.message}
                    onChange={handleChange}
                    className="mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-[#f1f2f6]"
                    placeholder="Message"                   
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-12 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-3xl text-sm w-32 px-5 py-2.5 text-center dark:bg-blue-600"
                >
                    SUBMIT
                </button>
                {submitted && (
                    <p className="text-green-500 mt-4">Thank you for reaching out! We have received your message and will get back to you soon.</p>
                )}
            </form>
        </>
    );
}
