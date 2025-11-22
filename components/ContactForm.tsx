"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        caseType: "",
        message: "",
        agreeTerms: false,
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const caseTypes = [
        { value: "dui", label: "DUI / Driving Under the Influence" },
        { value: "drug", label: "Drug Possession" },
        { value: "traffic", label: "Serious Traffic Offenses" },
        { value: "crimes-persons", label: "Crimes Against Persons" },
        { value: "expungement", label: "Expungement" },
        { value: "probation", label: "Probation Violation" },
        { value: "other", label: "Other / Not Sure" },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validation
        if (!formData.name || !formData.phone || !formData.email || !formData.caseType) {
            setError("Please fill in all required fields.");
            return;
        }

        if (!formData.agreeTerms) {
            setError("Please agree to the terms and privacy policy.");
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Here you would send the form data to your backend
        // For now, we'll just show a success message
        try {
            // Simulate API call
            console.log("Form submitted:", formData);

            // You would replace this with an actual API call:
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData),
            // });

            setSubmitted(true);
            setFormData({
                name: "",
                phone: "",
                email: "",
                caseType: "",
                message: "",
                agreeTerms: false,
            });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            setError("An error occurred. Please try calling us at 678.568.9135");
        }
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h2 className="font-serif text-3xl font-bold text-brandGreen-900 mb-3">
                    Free Consultation
                </h2>
                <p className="text-gray-600 text-lg">
                    Fill out the form below or call us directly at{" "}
                    <a href="tel:6785689135" className="font-bold text-brandGreen-900 hover:text-gold-500 transition-colors">
                        678.568.9135
                    </a>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-lg shadow-sm border border-gray-200">
                        {/* Success Message */}
                        {submitted && (
                            <div className="mb-6 p-4 bg-gold-50 border border-gold-200 rounded-lg">
                                <p className="text-brandGreen-900 font-semibold">
                                    Thank you! We've received your message. An attorney will contact you within 24 hours.
                                </p>
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 font-semibold">{error}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="(678) 123-4567"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Case Type */}
                            <div>
                                <label htmlFor="caseType" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Case Type *
                                </label>
                                <select
                                    id="caseType"
                                    name="caseType"
                                    value={formData.caseType}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                                >
                                    <option value="">Select a case type...</option>
                                    {caseTypes.map((type) => (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                Brief Description of Your Case
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                                placeholder="Tell us about your situation (optional)..."
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="mb-6">
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    required
                                    className="w-4 h-4 mt-1 text-gold-500 border-gray-300 rounded focus:ring-gold-500"
                                />
                                <span className="text-sm text-gray-600">
                                    I agree to the terms and privacy policy. I understand this is not a binding contract and does not constitute legal advice.
                                </span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gold-500 hover:bg-gold-600 text-brandGreen-900 font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            We respect your privacy. Your information will only be used to contact you about your case.
                        </p>
                    </form>
                </div>

                {/* Contact Info Sidebar */}
                <div className="lg:col-span-1">
                    {/* Phone */}
                    <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-lg border border-gold-200 mb-6">
                        <div className="flex items-start gap-3">
                            <Phone className="w-6 h-6 text-brandGreen-900 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-serif font-bold text-brandGreen-900 mb-1">Call Us Now</h3>
                                <a href="tel:6785689135" className="text-2xl font-bold text-brandGreen-900 hover:text-gold-600 transition-colors">
                                    678.568.9135
                                </a>
                                <p className="text-sm text-gray-600 mt-2">Available 24/7 for urgent cases</p>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                        <div className="flex items-start gap-3">
                            <Mail className="w-6 h-6 text-brandGreen-900 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-serif font-bold text-brandGreen-900 mb-1">Email Us</h3>
                                <p className="text-gray-600 text-sm">info@mckeenlawatlanta.com</p>
                                <p className="text-xs text-gray-500 mt-2">Response within 24 hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                        <h3 className="font-serif font-bold text-brandGreen-900 mb-4 flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            Locations
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div>
                                <p className="font-semibold text-gray-700">Johns Creek Office</p>
                                <p className="text-gray-600 text-xs">
                                    5805 State Bridge Road, Suite G-67<br />
                                    Johns Creek, GA 30097
                                </p>
                            </div>
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-semibold text-gray-700">Lawrenceville Office</p>
                                <p className="text-gray-600 text-xs">
                                    279 West Crogan Street<br />
                                    Lawrenceville, GA 30046
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-serif font-bold text-brandGreen-900 mb-3">Hours</h3>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p><strong>Mon - Fri:</strong> 9:00 AM - 6:00 PM</p>
                            <p><strong>Sat:</strong> 10:00 AM - 4:00 PM</p>
                            <p><strong>Sun:</strong> Closed</p>
                            <p className="text-gold-600 font-semibold mt-3">Emergency: 24/7 Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
