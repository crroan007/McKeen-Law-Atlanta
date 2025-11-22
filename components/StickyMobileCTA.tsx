"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import Link from "next/link";

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gradient-to-r from-brandGreen-900 to-brandGreen-800 border-t border-gold-500 shadow-2xl">
            <div className="container mx-auto px-2 py-3 flex gap-2">
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center w-10 h-10 rounded text-white/60 hover:text-white transition-colors flex-shrink-0"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Call Button */}
                <a
                    href="tel:6785689135"
                    className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-brandGreen-900 font-bold py-2 px-3 rounded transition-colors text-sm sm:text-base"
                >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden xs:inline">Call Now</span>
                </a>

                {/* Text Button */}
                <a
                    href="sms:6785689135"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-3 rounded transition-colors text-sm sm:text-base border border-white/30"
                >
                    <MessageCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="hidden xs:inline">Text</span>
                </a>

                {/* Contact Form Button */}
                <Link
                    href="/contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-3 rounded transition-colors text-sm sm:text-base border border-white/30"
                >
                    <span className="hidden xs:inline">Chat</span>
                </Link>
            </div>
        </div>
    );
}
