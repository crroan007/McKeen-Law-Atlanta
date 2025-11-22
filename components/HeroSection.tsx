"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import QuickContactForm from '@/components/QuickContactForm';

export default function HeroSection() {
    return (
        <section className="relative min-h-[75vh] flex items-center py-12 lg:py-20 overflow-hidden border-t-4 border-gold-500" style={{ backgroundColor: '#242b33' }}>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.webp"
                    alt="Atlanta skyline background"
                    fill
                    className="object-cover opacity-15 grayscale mix-blend-luminosity"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#242b33] via-[#242b33]/95 to-[#242b33]/80" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                {/* Top Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full mb-12"
                >
                    <div className="backdrop-blur-md border-y-[6px] border-double border-gold-500 py-5 px-6 text-center relative overflow-hidden group shadow-xl" style={{ backgroundColor: 'rgba(251, 249, 243, 0.98)' }}>
                        <p className="text-gold-700 text-[clamp(0.7rem,2.5vw,1.5rem)] font-serif tracking-[0.15em] uppercase font-bold whitespace-nowrap leading-none">
                            Former Prosecutor • Atlanta's Premier DUI & Criminal Defense Attorney
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* COLUMN 1: Photo (3 cols) */}
                    <div className="lg:col-span-3 relative flex justify-center lg:justify-start order-2 lg:order-1 pt-8 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[260px] lg:w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <Image
                                src="/mckeen.webp"
                                alt="Shane McKeen"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    {/* COLUMN 2: Messaging (5 cols) */}
                    <div className="lg:col-span-5 space-y-8 text-center lg:text-left order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-display text-white leading-tight mb-4 tracking-wider">
                                MCKEEN <span className="text-gold-500">LAW</span>
                            </h1>
                            <p className="text-xl lg:text-2xl text-white/90 font-light mb-6">
                                Prosecutor Turned <span className="font-medium text-white">Defense Attorney</span>
                            </p>
                            <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Shane McKeen used to build the state's cases. Now, he dismantles them. Leverage the strategic advantage of an attorney who knows the opposition's every move.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6"
                        >
                            <div>
                                <p className="text-gold-500 font-serif text-2xl font-bold">Former</p>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Prosecutor</p>
                            </div>
                            <div>
                                <p className="text-gold-500 font-serif text-2xl font-bold">Top Rated</p>
                                <p className="text-white/60 text-xs uppercase tracking-wider">Defense</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* COLUMN 3: Form (4 cols) */}
                    <div className="lg:col-span-4 order-3">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="mb-6">
                                <h3 className="text-white font-serif text-xl font-bold mb-1">Free Consultation</h3>
                                <p className="text-white/60 text-sm">Priority response within 1 hour.</p>
                            </div>
                            <QuickContactForm />

                            {/* Embedded Call Button */}
                            <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                <p className="text-white/60 text-xs mb-2 uppercase tracking-wider">Or Call Immediately</p>
                                <a href="tel:6785689135" className="block w-full">
                                    <Button variant="outline" className="w-full border-2 border-gold-500 text-gold-500 font-bold text-lg py-6 hover:bg-gold-500 hover:text-brandGreen-900 transition-all shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                        (678) 568-9135
                                    </Button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
