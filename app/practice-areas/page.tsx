import PageHeader from "@/components/PageHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const practiceAreas = [
    {
        category: "DUI Defense (Core 30)",
        items: [
            { name: "DUI Defense", href: "/dui-defense" },
            { name: "Emergency DUI (24/7)", href: "/emergency-dui" },
            { name: "ALS Hearings / License Protection", href: "/als-hearings" },
            { name: "License Suspension Defense", href: "/license-suspension" },
            { name: "Refusal Defense", href: "/refusal-defense" },
            { name: "Field Sobriety & Roadside Tests", href: "/field-sobriety-tests" },
            { name: "DUI Drugs", href: "/dui-drugs" },
            { name: "CDL / Commercial DUI", href: "/cdl-dui" },
            { name: "Under-21 DUI", href: "/under-21-dui" },
            { name: "BUI (Boating Under the Influence)", href: "/bui-defense" },
            { name: "DUI with Serious Injury", href: "/dui-serious-injury" },
            { name: "DUI with Child Endangerment", href: "/dui-child-endangerment" },
        ],
    },
    {
        category: "Serious Traffic & Criminal Defense",
        items: [
            { name: "Reckless Driving", href: "/reckless-driving" },
            { name: "Speeding / Super Speeder", href: "/super-speeder" },
            { name: "Driving While License Suspended", href: "/driving-license-suspended" },
            { name: "Habitual Violator", href: "/habitual-violator" },
            { name: "Failure to Yield / Following Too Closely", href: "/failure-to-yield" },
            { name: "Improper Lane Change / Red Light / Stop Sign", href: "/improper-lane-change" },
        ],
    },
    {
        category: "Drug Charges",
        items: [
            { name: "Possession with Intent", href: "/possession-intent-distribute" },
            { name: "Simple Possession", href: "/simple-possession" },
            { name: "Drug Trafficking", href: "/drug-trafficking" },
            { name: "Marijuana / THC / Vape", href: "/marijuana-thc" },
        ],
    },
    {
        category: "Probation & Record",
        items: [
            { name: "Felony Probation Violation", href: "/felony-probation-violation" },
            { name: "Misdemeanor Probation Violation", href: "/misdemeanor-probation-violation" },
            { name: "Early Termination / SB 440", href: "/early-termination-probation" },
            { name: "Record Restriction / Expungement", href: "/record-restriction" },
        ],
    },
    {
        category: "Violent & Theft Offenses",
        items: [
            { name: "Aggravated Assault / Battery", href: "/aggravated-assault" },
            { name: "Simple Battery", href: "/simple-battery" },
            { name: "Shoplifting / Retail Theft", href: "/shoplifting-retail-theft" },
            { name: "Theft by Taking / Deception", href: "/theft-by-taking" },
        ],
    },
];

export default function PracticeAreas() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Simple Banner to match legacy feel */}
            <div className="bg-brandGreen-900 text-white py-16 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Areas of Expertise</h1>
                    <div className="w-24 h-1 bg-gold-500 mx-auto" />
                </div>
            </div>

            <section className="py-20 container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-brandGreen-900 mb-12 text-center">
                        Criminal Defense Practice Areas
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {practiceAreas.map((area, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="text-lg font-bold text-brandGreen-900 uppercase tracking-wide border-b border-gray-200 pb-2">
                                    {area.category}
                                </h3>
                                <ul className="space-y-2">
                                    {area.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link
                                                href={item.href}
                                                className="text-gray-600 hover:text-gold-500 transition-colors text-sm md:text-base block py-1"
                                            >
                                                • {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
