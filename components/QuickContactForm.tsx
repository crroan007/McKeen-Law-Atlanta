"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function QuickContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        caseDetails: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormData({ name: '', phone: '', email: '', caseDetails: '' });
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center">
                <p className="text-white text-lg font-medium mb-2">Thank you!</p>
                <p className="text-white/80 text-sm">We'll contact you within 1 hour.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 space-y-4">
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="caseDetails" className="sr-only">Case Details</label>
                <textarea
                    id="caseDetails"
                    name="caseDetails"
                    rows={3}
                    placeholder="Brief case details (optional)"
                    value={formData.caseDetails}
                    onChange={(e) => setFormData({ ...formData, caseDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                />
            </div>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 rounded-md transition-colors"
            >
                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
            </Button>
            <p className="text-white/60 text-xs text-center">We respond within 1 hour • 100% confidential</p>
        </form>
    );
}
