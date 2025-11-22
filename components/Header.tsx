"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brandGreen-900/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-white">
                    McKeen Law
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-gold-500 transition-colors">Home</Link>
                    <Link href="/attorney" className="text-white hover:text-gold-500 transition-colors">Attorney Profile</Link>
                    <Link href="/practice-areas" className="text-white hover:text-gold-500 transition-colors">Practice Areas</Link>
                    <Link href="/testimonials" className="text-white hover:text-gold-500 transition-colors">Testimonials</Link>
                    <Link href="/contact" className="text-white hover:text-gold-500 transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="tel:6785689135" className="hidden md:flex items-center gap-2 text-gold-500 font-semibold">
                        <Phone className="w-4 h-4" />
                        <span>678.568.9135</span>
                    </a>
                    <Link href="/contact">
                        <Button variant="gold" size="sm" className="hidden md:inline-flex">
                            Free Consultation
                        </Button>
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
