import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import LocationsGrid from "@/components/LocationsGrid";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import { Gavel, Car, ShieldAlert, Scale, FileWarning, Siren, CheckCircle, Clock, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Atlanta Criminal Defense Attorney | McKeen Law",
    description: "Expert criminal defense representation in Atlanta, GA. DUI, drug charges, traffic violations & more. Free consultation available 24/7.",
    openGraph: {
        title: "Atlanta Criminal Defense Attorney | McKeen Law",
        description: "Expert criminal defense representation in Atlanta, GA. DUI, drug charges, traffic violations & more. Free consultation available 24/7.",
        type: "website",
    },
};

export default function Home() {
    const services = [
        {
            title: "DUI Defense",
            description: "Aggressive defense against Driving Under the Influence charges. We challenge field sobriety tests and breathalyzer results.",
            icon: Car,
            href: "/dui-defense"
        },
        {
            title: "Drug Possession",
            description: "Protecting your rights in drug-related cases. From simple possession to intent to distribute, we fight for your future.",
            icon: ShieldAlert,
            href: "/drug-possession"
        },
        {
            title: "Serious Traffic Offenses",
            description: "Defense against reckless driving, hit and run, and other serious traffic violations that threaten your license.",
            icon: Siren,
            href: "/serious-traffic-offenses"
        },
        {
            title: "Crimes Against Persons",
            description: "Experienced representation for assault, battery, and domestic violence charges. We tell your side of the story.",
            icon: Gavel,
            href: "/crimes-against-persons"
        },
        {
            title: "Expungement",
            description: "Clear your record and move forward with your life. We help seal eligible criminal records in Georgia.",
            icon: FileWarning,
            href: "/expungement"
        },
        {
            title: "Probation Violation",
            description: "Advocating for you in probation revocation hearings to keep you out of jail and back on track.",
            icon: Scale,
            href: "/probation-violation"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Schema />
            <Header />
            <HeroSection />

            {/* Why Choose McKeen Law - Condensed Section */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold text-brandGreen-900 mb-4">Why McKeen Law</h2>
                        <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Your future depends on three critical decisions you make right now.
                        </p>
                        <p className="text-gray-500 text-sm mt-4">Last updated: November 21, 2024</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {/* Personal Attorney vs Court-Appointed */}
                        <div className="bg-white p-8 rounded-xl border border-gold-200 shadow-sm">
                            <div className="bg-gold-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-7 h-7 text-brandGreen-900" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4 text-center">Don't Settle for "Free"</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Court-appointed attorneys handle 200+ cases. Yours is just another file on an overwhelming pile.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                                With McKeen Law, you're not a case number—you're a priority.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Personal cell phone access</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Custom defense strategy</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Resources to fight & win</span>
                                </li>
                            </ul>
                        </div>

                        {/* Why Act Now - FUD */}
                        <div className="bg-white p-8 rounded-xl border border-brandGreen-200 shadow-sm">
                            <div className="bg-brandGreen-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-7 h-7 text-brandGreen-900" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4 text-center">Every Hour Matters</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Evidence disappears. Witnesses forget. Surveillance footage gets deleted. Police reports get filed.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                                Delay is the prosecution's best friend. Don't give them that advantage.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Clock className="w-4 h-4 text-brandGreen-500 flex-shrink-0 mt-0.5" />
                                    <span>10-day ALS deadline for DUI</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Gavel className="w-4 h-4 text-brandGreen-500 flex-shrink-0 mt-0.5" />
                                    <span>Early intervention = better deals</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Star className="w-4 h-4 text-brandGreen-500 flex-shrink-0 mt-0.5" />
                                    <span>Secure critical evidence now</span>
                                </li>
                            </ul>
                        </div>

                        {/* Former Prosecutor Advantage */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                            <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldAlert className="w-7 h-7 text-brandGreen-900" />
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4 text-center">Former Prosecutor</h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Shane McKeen prosecuted hundreds of DUI and criminal cases. He knows their playbook—because he wrote it.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                                Now he uses that insider knowledge to dismantle their case against you.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Star className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Knows prosecutor tactics</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Clock className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Available 24/7 for arrests</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <Car className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <span>Deep Atlanta court experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <p className="text-gray-700 mb-2 text-lg font-medium">
                            The prosecutor already has their strategy.
                        </p>
                        <p className="text-gray-600 mb-6 text-lg">
                            You need someone who knows it—and knows how to beat it.
                        </p>
                        <a href="tel:6785689135" className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg">
                            Call 678.568.9135 Now
                        </a>
                    </div>
                </div>
            </section>

            {/* H2 Category Blurbs - PRD Requirement */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/dui-defense" className="hover:text-gold-500 transition-colors">
                                    DUI Defense in Atlanta
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Aggressive defense against DUI charges. Challenge field sobriety tests, breathalyzer results, and police procedure. Protect your license and record.
                            </p>
                            <Link href="/dui-defense" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/drug-possession" className="hover:text-gold-500 transition-colors">
                                    Drug Possession Defense
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Protecting your rights in drug cases. From simple possession to intent to distribute. Fight for reduced charges or dismissal.
                            </p>
                            <Link href="/drug-possession" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/serious-traffic-offenses" className="hover:text-gold-500 transition-colors">
                                    Traffic Violations
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Defense against reckless driving, hit and run, and serious traffic offenses. Keep your license and avoid points.
                            </p>
                            <Link href="/serious-traffic-offenses" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/crimes-against-persons" className="hover:text-gold-500 transition-colors">
                                    Assault & Battery
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Experienced representation for assault, battery, and domestic violence charges. Tell your side of the story.
                            </p>
                            <Link href="/crimes-against-persons" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/expungement" className="hover:text-gold-500 transition-colors">
                                    Record Expungement
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Clear your criminal record and move forward. Help seal eligible offenses in Georgia for a fresh start.
                            </p>
                            <Link href="/expungement" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-3">
                                <Link href="/probation-violation" className="hover:text-gold-500 transition-colors">
                                    Probation Violations
                                </Link>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-3">
                                Representation in probation revocation hearings. Keep you out of jail and protect your probation status.
                            </p>
                            <Link href="/probation-violation" className="text-gold-500 font-medium hover:text-gold-600 transition-colors inline-flex items-center gap-1">
                                Learn more →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Reviews Section */}
            <ReviewsSection />

            {/* Locations Grid */}
            <LocationsGrid />

            {/* Practice Areas Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-brandGreen-900 mb-4">Practice Areas</h2>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We specialize in criminal defense, providing personalized and aggressive representation for a wide range of charges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </section>

            <TestimonialCarousel />
            <Footer />
        </main>
    );
}
