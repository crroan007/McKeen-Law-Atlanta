"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Phone, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brandGreen-900/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-32 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-6">
                    <Image
                        src="/scales.png"
                        alt="Scales of Justice"
                        width={120}
                        height={120}
                        className="h-28 w-auto"
                        priority
                    />
                    <div className="flex flex-col">
                        <span className="font-display text-6xl text-cream leading-none tracking-wider">
                            MCKEEN LAW
                        </span>
                        <span className="text-gold-500 text-base tracking-widest mt-2">
                            ATLANTA, P.C.
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-cream hover:border-transparent pb-1">Home</Link>
                    <Link href="/attorney" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-cream hover:border-transparent pb-1">Attorney Profile</Link>
                    <Link href="/practice-areas" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-cream hover:border-transparent pb-1">Practice Areas</Link>
                    <Link href="/testimonials" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-cream hover:border-transparent pb-1">Testimonials</Link>
                    <Link href="/contact" className="text-white hover:text-gold-500 transition-colors text-lg font-medium border-b-2 border-cream hover:border-transparent pb-1">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="tel:6785689135" className="hidden md:flex items-center gap-2 text-gold-500 font-semibold text-lg">
                        <Phone className="w-5 h-5" />
                        <span>678.568.9135</span>
                    </a>
                    <Link href="/contact">
                        <Button variant="gold" size="lg" className="hidden md:inline-flex text-base">
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
