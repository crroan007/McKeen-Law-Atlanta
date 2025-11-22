import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicePages } from "@/lib/servicePages";
import type { Metadata } from "next";

type PageParams = { params: { slug: string } };

export function generateMetadata({ params }: PageParams): Metadata {
    const content = servicePages[params.slug];
    if (content) {
        return {
            title: content.metaTitle,
            description: content.metaDescription,
            openGraph: {
                title: content.metaTitle,
                description: content.metaDescription,
            },
        };
    }

    const fallbackTitle = params.slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return {
        title: `${fallbackTitle} | McKeen Law`,
        description: `Legal help for ${fallbackTitle} in Atlanta.`,
    };
}

export default function DynamicPage({ params }: PageParams) {
    const slug = params.slug;
    const content = servicePages[slug];
    const title = content?.title ?? slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader title={title} subtitle={content?.subtitle ?? `Expert legal representation for ${title} in Atlanta.`} />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-10">
                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <p className="text-gray-700 text-lg leading-relaxed">{content?.intro ?? `If you are facing charges related to ${title}, you need an experienced attorney on your side.`}</p>

                        {content?.highlights && (
                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                {content.highlights.map((item, idx) => (
                                    <div key={idx} className="p-5 bg-gray-50 rounded border border-gray-100">
                                        <h3 className="font-semibold text-brandGreen-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>

                    {content?.steps && (
                        <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">How We Defend You</h2>
                            <div className="space-y-4">
                                {content.steps.map((step, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-full bg-gold-100 text-gold-700 flex items-center justify-center font-bold">{idx + 1}</div>
                                        <div>
                                            <h3 className="font-semibold text-brandGreen-900">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">Local Insight</h2>
                        <ul className="space-y-3 list-disc list-inside text-gray-700">
                            {(content?.localProof ?? [
                                "Knowledge of Metro Atlanta courts, judges, and procedures.",
                                "Experience with local prosecutors and negotiation expectations.",
                                "Guidance on next steps to protect your license and record.",
                            ]).map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                        <h2 className="font-serif text-2xl font-bold text-brandGreen-900 mb-4">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {(content?.faqs ?? [
                                {
                                    question: `What should I do if I am charged with ${title}?`,
                                    answer: "Contact an attorney immediately. Do not speak to law enforcement without legal counsel present.",
                                },
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
                        <h2 className="font-serif text-2xl font-bold mb-3">Call Now for a Free Consultation</h2>
                        <p className="text-gold-100 mb-4">
                            {content?.cta ?? "We move fast to protect your license, your record, and your future."}
                        </p>
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
