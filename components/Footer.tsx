import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brandGreen-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-4">
                            McKeen Law <span className="text-gold-500">Atlanta</span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Dedicated legal representation for criminal defense and personal injury cases in Atlanta and surrounding areas.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-gold-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gold-500 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-gold-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-500">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/attorney" className="text-gray-300 hover:text-white transition-colors">Attorney Profile</Link></li>
                            <li><Link href="/practice-areas" className="text-gray-300 hover:text-white transition-colors">Practice Areas</Link></li>
                            <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-500">Practice Areas</h4>
                        <ul className="space-y-2">
                            <li><Link href="/dui-defense" className="text-gray-300 hover:text-white transition-colors">DUI Defense</Link></li>
                            <li><Link href="/drug-crimes" className="text-gray-300 hover:text-white transition-colors">Drug Crimes</Link></li>
                            <li><Link href="/violent-crimes" className="text-gray-300 hover:text-white transition-colors">Violent Crimes</Link></li>
                            <li><Link href="/theft-crimes" className="text-gray-300 hover:text-white transition-colors">Theft Crimes</Link></li>
                            <li><Link href="/traffic-violations" className="text-gray-300 hover:text-white transition-colors">Traffic Violations</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-gold-500">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                                <div className="text-gray-300 text-sm">
                                    <p className="font-semibold text-white mb-1">Mailing Address:</p>
                                    <p>5805 State Bridge Road, Suite G-67</p>
                                    <p className="mb-2">Johns Creek, GA 30097</p>

                                    <p className="font-semibold text-white mb-1">Office Address:</p>
                                    <p>279 West Crogan Street</p>
                                    <p>Lawrenceville, GA 30046</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                                <a href="tel:6785689135" className="text-gray-300 hover:text-white transition-colors">678.568.9135</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                                <a href="mailto:shane@mckeenlawatlanta.com" className="text-gray-300 hover:text-white transition-colors">shane@mckeenlawatlanta.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} McKeen Law Atlanta. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
