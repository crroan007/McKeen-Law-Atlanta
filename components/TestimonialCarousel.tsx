"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Mr. McKeen is an exceptional attorney. He handled my case with the utmost professionalism and achieved a result I didn't think was possible.",
        author: "Sarah J.",
        rating: 5
    },
    {
        id: 2,
        text: "I was facing serious charges and terrified for my future. Shane McKeen fought for me every step of the way. I highly recommend him.",
        author: "Michael R.",
        rating: 5
    },
    {
        id: 3,
        text: "Professional, knowledgeable, and truly cares about his clients. The best criminal defense lawyer in Atlanta.",
        author: "David L.",
        rating: 5
    }
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 bg-white text-brandGreen-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Testimonials</h2>
                    <div className="w-24 h-1 bg-gold-500 mx-auto" />
                </div>

                <div className="relative max-w-4xl mx-auto h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center"
                        >
                            <Quote className="w-12 h-12 text-gold-500 mb-6 opacity-50" />
                            <p className="text-xl md:text-2xl font-light italic mb-8 leading-relaxed max-w-2xl">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                                ))}
                            </div>
                            <p className="font-bold text-lg text-brandGreen-900">{testimonials[currentIndex].author}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-gold-500' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
