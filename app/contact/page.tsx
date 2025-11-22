import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact Us | McKeen Law - Free Criminal Defense Consultation",
    description: "Contact McKeen Law for a free criminal defense consultation. Available 24/7 in Atlanta, Georgia.",
    openGraph: {
        title: "Contact Us | McKeen Law - Free Criminal Defense Consultation",
        description: "Contact McKeen Law for a free criminal defense consultation. Available 24/7 in Atlanta, Georgia.",
        type: "website",
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch for a free consultation. We are here to help you 24/7."
            />
            <div className="container mx-auto px-4 py-16">
                <ContactForm />
            </div>
            <Footer />
        </main>
    );
}
