import Link from "next/link";
import { LOCATIONS, REGIONS } from "@/lib/locations";

export default function LocationsGrid() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-brandGreen-900 mb-4">Areas We Serve</h2>
                    <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        McKeen Law Atlanta proudly serves clients across the entire state of Georgia.
                        Select your county below to learn more about our local defense services.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {REGIONS.map((region) => {
                        const regionLocations = LOCATIONS.filter((loc) => loc.region === region);

                        if (regionLocations.length === 0) return null;

                        return (
                            <div key={region} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-serif text-xl font-bold text-brandGreen-800 mb-4 border-b border-gray-100 pb-2">
                                    {region}
                                </h3>
                                <ul className="space-y-2">
                                    {regionLocations.map((location) => (
                                        <li key={location.slug}>
                                            <Link
                                                href={`/locations/${location.slug}`}
                                                className="text-gray-600 hover:text-gold-600 transition-colors text-sm flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0"></span>
                                                {location.displayName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
