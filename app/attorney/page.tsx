import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shane McKeen | Atlanta DUI & Criminal Defense Attorney",
    description: "Attorney profile for Shane McKeen of McKeen Law. Focused on DUI, serious traffic, and criminal defense across Metro Atlanta.",
    openGraph: {
        title: "Shane McKeen | Atlanta DUI Lawyer",
        description: "Meet Shane McKeen, the attorney behind McKeen Law's DUI and criminal defense practice.",
    },
};

export default function AttorneyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <PageHeader
                title="Attorney Profile"
                subtitle="Shane McKeen - Dedicated Criminal Defense Attorney"
            />
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="w-full md:w-1/3 relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/mckeen.webp"
                            alt="Shane McKeen"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="font-serif text-3xl font-bold text-brandGreen-900 mb-6">Shane McKeen</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Shane McKeen is a dedicated criminal defense attorney serving Atlanta and the surrounding areas. With years of experience in the courtroom, he has built a reputation for aggressive representation and unwavering commitment to his clients.
                            </p>
                            <p className="mb-4">
                                Specializing in DUI defense, drug charges, and serious traffic offenses, Shane understands that good people sometimes find themselves in difficult situations. He believes that every client deserves a vigorous defense and a second chance.
                            </p>
                            <h3 className="font-serif text-xl font-bold text-brandGreen-900 mt-8 mb-4">Education & Admissions</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>J.D., Georgia State University College of Law</li>
                                <li>B.A., University of Georgia</li>
                                <li>State Bar of Georgia</li>
                                <li>Georgia Court of Appeals</li>
                                <li>Supreme Court of Georgia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
