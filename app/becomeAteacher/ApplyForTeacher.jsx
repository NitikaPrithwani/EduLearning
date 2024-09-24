"use client";
import { useState } from 'react';

export default function ApplyForTeacher() {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        const phonePattern = /^[0-9]{10}$/; 

        if (!formValues.phone) {
            newErrors.phone = 'Phone number is required.';
        } else if (!phonePattern.test(formValues.phone)) {
            newErrors.phone = 'Phone number must be 10 digits long and contain only numbers.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({
            ...formValues,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Submitted', formValues);
            setFormValues({
                name: '',
                email: '',
                phone: '',
                comment: '',
            });
            setErrors({});
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <>
            <div className="md:container md:flex md:lg:w-4/5 md:mx-auto md:gap-16 mt-12 grid grid-cols-1">
                <div className="lg:w-7/12">
                    <h1 className="font-bold text-3xl m-3 tracking-wider">Teaching Benefits</h1>
                    <img src="/teacher/meeting-1245776_1920.jpg" alt="Teaching Benefits" className="h-64 w-full rounded-2xl" />
                    <p className="leading-6 mt-5 text-center md:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eius harum molestiae. Consect magnam minima, sapiente impedit eius dolor unde odit saepe quas neque itaque vitae recusa libero assumenda aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia incidunt error dignissimos ex aliquam! Distinctio accusamus magnam, quidem numquam perspiciatis sapiente sit eveniet deserunt, doloremque soluta fuga itaque quasi.
                    </p>
                    <br />
                    <p className="leading-6 text-center md:text-start">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores mollitia facere possimus? Reiciendis numquam accusamus deleniti nesciunt quis ut ad. Repellat libero beatae atque nesciunt quis exercitationem inventore porro.
                    </p>
                </div>
                <div style={{ backgroundColor: "#f1f2f6" }} className="mt-8 lg:w-5/12">
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <h1 className="text-2xl text-black font-bold tracking-wider mb-8 mt-5 ms-10">Apply For Teaching</h1>
                        <div className="mb-5">
                            <input
                                type="text"
                                id="name"
                                value={formValues.name}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                                placeholder="Your Name"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                id="email"
                                value={formValues.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                                placeholder="Email Address"
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-5">
                            <input
                                type="text"
                                id="phone"
                                value={formValues.phone}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                                placeholder="Phone"
                                required
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div className="mb-5">
                            <textarea
                                id="comment"
                                rows="4"
                                value={formValues.comment}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light bg-[#f1f2f6]"
                                placeholder="Comment"
                                required
                            />
                            {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
                        </div>
                        <button
                            type="submit"
                            className="transform transition duration-500 hover:scale-105 text-white ms-10 mt-12 bgBtn bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600"
                        >
                            APPLY FOR IT
                        </button>
                        {submitted && (
                            <p className="text-green-500 mt-4 ms-10">
                                Thank you for applying! We have received your application and will review it shortly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}
