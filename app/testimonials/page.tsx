import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsCollage from "@/components/TestimonialsCollage";

export const metadata = {
    title: "Client Reviews | McKeen Law Atlanta",
    description: "Read 5-star reviews from past clients. See why McKeen Law is one of the most trusted criminal defense firms in Atlanta.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader
                title="Client Success Stories"
                subtitle="Real results for real people. See what our clients say about our aggressive representation."
            />

            <TestimonialsCollage />

            <Footer />
        </main>
    );
}
