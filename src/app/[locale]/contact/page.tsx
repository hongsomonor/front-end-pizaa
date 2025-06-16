'use client';

import React, {useState} from 'react';
import Image from 'next/image';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Message sent!');
        // Clear form after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            {/* Contact Info Section */}
            <section
                className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-10 pt-[6rem] bg-gray-100 text-black dark:bg-[#1e1e3b] dark:text-white">
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="https://img.icons8.com/ios-filled/50/000000/phone.png"
                        alt="Phone Icon"
                        width={50}
                        height={50}
                        className={"dark:filter dark:grayscale dark:brightness-0 dark:invert"}
                    />
                    <h2 className="text-xl font-semibold mt-2">Phone</h2>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">+855 778 542 35</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="https://img.icons8.com/ios-filled/50/000000/email.png"
                        alt="Email Icon"
                        width={50}
                        height={50}
                        className={"dark:filter dark:grayscale dark:brightness-0 dark:invert"}
                    />
                    <h2 className="text-xl font-semibold mt-2">Email</h2>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">praksao44@gmail.com</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Image
                        src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                        alt="Address Icon"
                        width={50}
                        height={50}
                        className={"dark:filter dark:grayscale dark:brightness-0 dark:invert"}
                    />
                    <h2 className="text-xl font-semibold mt-2">Address</h2>
                    <p className="text-gray-500 dark:text-gray-300 mt-1">Phnom Penh, Cambodia</p>
                </div>
            </section>

            {/* Contact Form + Map Section */}
            <section
                className="flex flex-col lg:flex-row gap-8 px-4 py-10 justify-center items-start bg-white text-black dark:bg-[#212150] dark:text-white">
                {/* Contact Form */}
                <div className="w-full lg:w-[40%]">
                    <h2 className="text-2xl font-bold mb-2">Contact Form</h2>
                    <hr className="mb-4 border-white"/>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name (*)"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-gray-200 text-black px-4 py-2 rounded-lg"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email (*)"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-gray-200 text-black px-4 py-2 rounded-lg"
                        />
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-gray-200 text-black px-4 py-2 rounded-lg resize-y"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Map */}
                <div className="w-full lg:w-[60%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2001795.1109677637!2d103.9753764945869!3d11.497512025842383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1skm!2skh!4v1749548407734!5m2!1skm!2skh"
                        width="100%"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </section>
        </>
    );
};

export default Contact;
