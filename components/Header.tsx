"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
    return (
        <header className="text-white py-4 sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#242b33' }}>
            <div className="container mx-auto px-4 flex items-center justify-start gap-8 lg:gap-12">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/only-logo.png"
                        alt="McKeen Law Atlanta"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-28 md:h-48 lg:h-64 object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-gold-500 hover:border-transparent pb-1 whitespace-nowrap">Home</Link>
                    <Link href="/attorney" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-gold-500 hover:border-transparent pb-1 whitespace-nowrap">Attorney Profile</Link>
                    <Link href="/practice-areas" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-gold-500 hover:border-transparent pb-1 whitespace-nowrap">Practice Areas</Link>
                    <Link href="/testimonials" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-gold-500 hover:border-transparent pb-1 whitespace-nowrap">Testimonials</Link>
                    <Link href="/contact" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-gold-500 hover:border-transparent pb-1 whitespace-nowrap">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 ml-auto">
                    <a href="tel:6785689135" className="hidden md:flex items-center gap-2 text-gold-500 font-semibold text-lg hover:text-gold-400 transition-colors">
                        <Phone className="w-5 h-5" />
                        <span>678.568.9135</span>
                    </a>
                    <Link href="/contact">
                        <Button variant="gold" size="lg" className="hidden md:inline-flex text-base font-bold text-brandGreen-900">
                            Free Consultation
                        </Button>
                    </Link>
                    <button className="lg:hidden text-white hover:text-gold-500 transition-colors">
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </header>
    );
}
