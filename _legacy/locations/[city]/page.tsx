import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locationPages } from "@/lib/locationPages";
import Link from "next/link";
import type { Metadata } from "next";

type PageParams = { params: { city: string } };

export function generateMetadata({ params }: PageParams): Metadata {
    const data = locationPages[params.city.toLowerCase()];
    if (data) {
        return {
            title: `${data.name} DUI Lawyer | McKeen Law`,
            description: data.subtitle,
        };
    }
    const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
    return {
        title: `${city} DUI Lawyer | McKeen Law`,
        description: `Local DUI and criminal defense for ${city}, GA.`,
    };
}

export default function LocationPage({ params }: PageParams) {
    const key = params.city.toLowerCase();
    const data = locationPages[key];
    const city = data?.name ?? params.city.charAt(0).toUpperCase() + params.city.slice(1);

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader title={data?.header ?? `DUI & Criminal Defense in ${city}`} subtitle={data?.subtitle ?? `Experienced legal representation for residents of ${city}.`} />
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-12">
                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-serif text-3xl font-bold text-brandGreen-900 mb-4">Defending Your Rights in {city}</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">{data?.intro ?? `If you have been arrested in ${city}, you need a lawyer who understands the local legal system.`}</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {(data?.services ?? [
                            { title: `DUI Defense in ${city}`, description: `Aggressive defense against DUI charges in ${city}.`, href: "/dui-defense" },
                            { title: "License Protection", description: "Immediate ALS filing and permit guidance.", href: "/als-hearings" },
                            { title: "Refusal & Testing Challenges", description: "Challenge implied consent, breath/blood tests, and field tests.", href: "/refusal-defense" },
                            { title: "Reckless & Serious Traffic", description: "Protect points, insurance, and your record.", href: "/reckless-driving" },
                        ]).map((service, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-semibold text-brandGreen-900 text-lg mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                                <Link href={service.href} className="text-gold-600 font-semibold hover:text-gold-500">
                                    Learn more
                                </Link>
                            </div>
                        ))}
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">Local Courts & Process</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {(data?.courts ?? [`${city} area courts and Recorder/State Court venues.`]).map((court, idx) => (
                                <li key={idx}>{court}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">Local Insight</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {(data?.proof ?? [
                                "Knowledge of local judges and prosecutors.",
                                "Experience with checkpoints and stop patterns in the area.",
                                "Guidance on parking, scheduling, and court expectations.",
                            ]).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {(data?.faqs ?? [
                                { question: `How do I find the best DUI lawyer in ${city}?`, answer: "Choose counsel who knows local courts, reviews your stop and tests, and moves fast on ALS filings." },
                                { question: `What are the penalties for a DUI in ${city}?`, answer: "Penalties vary by facts and history—fines, license suspension, and possible jail. Early defense improves outcomes." },
                            ]).map((faq, idx) => (
                                <details key={idx} className="group border border-gray-200 rounded-lg p-4">
                                    <summary className="font-semibold cursor-pointer text-gold-700 list-none flex items-center justify-between">
                                        <span>{faq.question}</span>
                                        <span className="text-xl text-gold-500 group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <section className="bg-brandGreen-900 text-white p-8 rounded-lg shadow-sm border border-brandGreen-800">
                        <h3 className="font-serif text-2xl font-bold mb-3">Call Now for a Free Consultation</h3>
                        <p className="text-gold-100 mb-4">Protect your license and record in {city}. We move fast on ALS deadlines and local court strategy.</p>
                        <div className="flex flex-wrap gap-4">
                            <a href="tel:+16785689135" className="inline-flex items-center justify-center px-6 py-3 bg-gold-500 text-brandGreen-900 font-semibold rounded-lg shadow hover:bg-gold-400 transition">
                                Call 678.568.9135
                            </a>
                            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-brandGreen-900 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
                                Schedule a Consultation
                            </a>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
