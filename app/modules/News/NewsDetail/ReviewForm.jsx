"use client";
import { useState } from 'react';

export default function ReviewForm() {
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        email: '',
        website: '',
        comment: '',
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
        if (formValues.fname && formValues.email && formValues.comment) {
            console.log('Form Submitted', formValues);

            setFormValues({
                fname: '',
                lname: '',
                email: '',
                website: '',
                comment: '',
            });
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        } else {
            alert("Please fill out all required fields.");
        }
    };

    return (
        <div className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto mt-12">
            <h2 className="font-bold mb-2">ADD YOUR REVIEW</h2>
            <p className="text-gray-500 mb-3">Your email address will not be published. Required fields are marked *</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-5 flex">
                    <input
                        type="text"
                        id="fname"
                        value={formValues.fname}
                        onChange={handleChange}
                        className="shadow-sm me-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="First Name *"
                        required
                    />
                    <input
                        type="text"
                        id="lname"
                        value={formValues.lname}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-5 flex">
                    <input
                        type="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        className="shadow-sm me-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Email *"
                        required
                    />
                    <input
                        type="text"
                        id="website"
                        value={formValues.website}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Website"
                    />
                </div>
                <div className="mb-5">
                    <textarea
                        id="comment"
                        value={formValues.comment}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Comment *"
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        backgroundImage: 'url(/HomePageImages/plain-background.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    className="text-white mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    SUBMIT COMMENT
                </button>
                {submitted && (
                    <p className="text-green-500 mt-4">Thank you for your comment! Your feedback has been successfully submitted.</p>
                )}
            </form>
        </div>
    );
}
