import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
    const testimonials = [
        {
            text: "Mr. McKeen saved my life. I was facing serious charges and he fought for me every step of the way. The outcome was better than I could have ever hoped for.",
            author: "Former Client",
            caseType: "Felony Defense"
        },
        {
            text: "Professional, knowledgeable, and truly cares about his clients. He was always available to answer my questions and eased my anxiety during a very difficult time.",
            author: "A.J.",
            caseType: "DUI Defense"
        },
        {
            text: "I highly recommend Shane McKeen. His experience in the courtroom is evident. He got my case dismissed when other lawyers said it was impossible.",
            author: "Sarah M.",
            caseType: "Drug Possession"
        },
        {
            text: "Shane is the best lawyer in Atlanta. He knows the system and knows how to get results. Don't hire anyone else.",
            author: "Michael R.",
            caseType: "Traffic Offense"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader
                title="Client Testimonials"
                subtitle="See what our past clients have to say about our representation."
            />
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 relative">
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-gold-500/20" />
                            <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.text}"</p>
                            <div>
                                <div className="font-bold text-brandGreen-900">{t.author}</div>
                                <div className="text-sm text-gold-500 font-medium">{t.caseType}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
