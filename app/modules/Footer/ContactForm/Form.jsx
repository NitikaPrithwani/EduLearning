"use client"
import React, { useState } from 'react';
import MailInput from './MailInput';
import NameInput from './NameInput';
import SubscribeBtn from './SubscribeBtn';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email) {
            setName('');
            setEmail('');
            setMessage('Thank you for subscribing!');
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
        } else {
            setMessage('Please fill out both fields.');
            setShowMessage(true);
        }
    };

    return (
        <>
            <div className="md:container md:mx-auto mt-8 pb-8 pt-8 flex bg-white md:w-4/5 w-4/5 mx-auto rounded-2xl flex-col md:flex-row items-center">
                <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row items-center">
                    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 ">
                        <NameInput name={name} setName={setName} />
                        <MailInput email={email} setEmail={setEmail} />
                    </div>
                    <SubscribeBtn />
                </form>
                {showMessage && (
                    <div className="mt-4 text-green-600 font-semibold">
                        {message}
                    </div>
                )}
            </div>
        </>
    );
}








