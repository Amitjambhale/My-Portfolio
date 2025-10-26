// src/pages/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: "error", message: "Please fill all fields." });
            return;
        }

        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-100 min-h-[80vh]">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-violet-500 mb-12 text-center">
                Get in Touch
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/* Contact Info Cards */}
                <div className="space-y-6 sm:space-y-8">
                    {[
                        {
                            icon: <FaEnvelope className="text-yellow-400 text-3xl" />,
                            title: "Email",
                            info: "amitjambhlae8010@gmail.com",
                        },
                        {
                            icon: <FaPhone className="text-yellow-400 text-3xl" />,
                            title: "Phone",
                            info: "91-8010638997",
                        },
                        {
                            icon: <FaMapMarkerAlt className="text-yellow-400 text-3xl" />,
                            title: "Location",
                            info: "Pune, India",
                        },
                    ].map(({ icon, title, info }) => (
                        <div
                            key={title}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="p-4 bg-violet-700 rounded-full self-center sm:self-auto">{icon}</div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{title}</h3>
                                <p className="text-gray-300 break-words">{info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-900 rounded-xl p-6 sm:p-8 shadow-lg"
                    noValidate
                >
                    <div className="mb-6">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Your Name
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                👤
                            </span>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-gray-600 text-gray-100 
                                focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 
                                placeholder-gray-500 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Your Email
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                📧
                            </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-gray-600 text-gray-100 
                                focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/40 
                                placeholder-gray-500 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <textarea
                            name="message"
                            id="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className="block py-2.5 px-4 w-full text-gray-100 bg-transparent border border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400/40 focus:border-yellow-400 placeholder-gray-500 transition-all"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {status && (
                        <p
                            className={`mb-4 font-semibold ${
                                status.type === "error"
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}
                        >
                            {status.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-xl shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
