interface LocationMapProps {
    query: string;
    apiKey?: string;
}

export default function LocationMap({ query, apiKey }: LocationMapProps) {
    // Fallback to a placeholder if no API key is present (for dev/build safety)
    if (!apiKey) {
        return (
            <div className="w-full h-[400px] bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                <div className="text-center p-6">
                    <p className="text-gray-500 font-medium mb-2">Map Unavailable</p>
                    <p className="text-sm text-gray-400">Google Maps API Key missing</p>
                </div>
            </div>
        );
    }

    const encodedQuery = encodeURIComponent(query);
    const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedQuery}`;

    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                title={`Map of ${query}`}
            ></iframe>
        </div>
    );
}
