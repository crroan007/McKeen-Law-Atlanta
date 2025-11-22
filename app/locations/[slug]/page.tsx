import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/lib/locations";
import LocationMap from "@/components/LocationMap";
import ReviewsSection from "@/components/ReviewsSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const location = LOCATIONS.find((loc) => loc.slug === params.slug);

    if (!location) {
        return {
            title: "Location Not Found | McKeen Law Atlanta",
        };
    }

    return {
        title: `${location.name} | Top-Rated Criminal Defense`,
        description: `Experienced ${location.displayName} DUI and criminal defense attorney. Former prosecutor Shane McKeen fights for clients in ${location.displayName} and surrounding areas. Free consultation.`,
    };
}

export async function generateStaticParams() {
    return LOCATIONS.map((location) => ({
        slug: location.slug,
    }));
}

export default function LocationPage({ params }: Props) {
    const location = LOCATIONS.find((loc) => loc.slug === params.slug);

    if (!location) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "McKeen Law Atlanta",
        "description": `Criminal defense and DUI attorney serving ${location.displayName}, Georgia.`,
        "url": `https://mckeenlawatlanta.com/locations/${location.slug}`,
        "telephone": "+1-678-568-9135",
        "areaServed": {
            "@type": "City",
            "name": location.displayName,
            "address": {
                "@type": "PostalAddress",
                "addressRegion": "GA",
                "addressCountry": "US"
            }
        },
        "priceRange": "$$"
    };

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="bg-brandGreen-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/hero-bg.webp')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link href="/" className="inline-flex items-center text-gold-400 hover:text-gold-300 mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                        {location.name}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Aggressive, experienced criminal defense representation for {location.displayName} and the {location.region} area.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Intro */}
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="font-serif text-3xl font-bold text-brandGreen-900 mb-6">
                                Defending Your Rights in {location.displayName}
                            </h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    If you have been arrested or charged with a crime in <strong>{location.displayName}</strong>, you need an attorney who understands the local court system.
                                    Shane McKeen is a former prosecutor who knows how the other side thinks and operates.
                                </p>
                                <p className="mt-4">
                                    We handle all types of criminal cases in {location.displayName}, including:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>DUI (Driving Under the Influence)</li>
                                    <li>Drug Possession and Trafficking</li>
                                    <li>Traffic Violations</li>
                                    <li>Domestic Violence</li>
                                    <li>Probation Violations</li>
                                </ul>
                                <p className="mt-6">
                                    Don't face the judge alone. Contact McKeen Law Atlanta today for a free consultation regarding your case in {location.displayName}.
                                </p>
                            </div>
                        </section>

                        {/* Map Section */}
                        <section>
                            <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-6">
                                Serving {location.displayName}, GA
                            </h3>
                            <LocationMap
                                query={location.mapQuery}
                                apiKey={process.env.GOOGLE_PLACES_API_KEY}
                            />
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-8">
                            <h3 className="font-serif text-xl font-bold text-brandGreen-900 mb-4">
                                Free Consultation
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Speak directly with an attorney about your {location.displayName} case.
                            </p>
                            <a
                                href="tel:+16785689135"
                                className="block w-full bg-gold-500 hover:bg-gold-600 text-white text-center font-bold py-3 rounded-lg transition-colors mb-4"
                            >
                                Call (678) 568-9135
                            </a>
                            <Link
                                href="/contact"
                                className="block w-full bg-brandGreen-900 hover:bg-brandGreen-800 text-white text-center font-bold py-3 rounded-lg transition-colors"
                            >
                                Online Case Evaluation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section Reuse */}
            <ReviewsSection />
        </main>
    );
}
