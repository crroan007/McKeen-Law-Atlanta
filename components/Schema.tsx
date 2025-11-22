import Script from "next/script";

export default function Schema() {
    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "McKeen Law Atlanta",
        "url": "https://mckeenlawatlanta.com",
        "logo": "https://mckeenlawatlanta.com/images/logo.png",
        "description": "Expert criminal defense attorney in Atlanta, GA. Specializing in DUI, drug possession, and serious traffic offenses.",
        "telephone": "+1-678-568-9135",
        "email": "info@mckeenlawatlanta.com",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "5805 State Bridge Road, Suite G-67",
                "addressLocality": "Johns Creek",
                "addressRegion": "GA",
                "postalCode": "30097",
                "addressCountry": "US"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "279 West Crogan Street",
                "addressLocality": "Lawrenceville",
                "addressRegion": "GA",
                "postalCode": "30046",
                "addressCountry": "US"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/mckeenlaw",
            "https://www.linkedin.com/company/mckeenlaw"
        ]
    };

    // Local Business Schema
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "LegalService"],
        "name": "McKeen Law Atlanta",
        "image": "https://mckeenlawatlanta.com/images/logo.png",
        "description": "Expert criminal defense representation in Atlanta, GA. DUI defense, drug charges, traffic violations & more. Available 24/7.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "5805 State Bridge Road, Suite G-67",
            "addressLocality": "Johns Creek",
            "addressRegion": "GA",
            "postalCode": "30097",
            "addressCountry": "US"
        },
        "telephone": "+1-678-568-9135",
        "url": "https://mckeenlawatlanta.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "16:00"
            }
        ],
        "areaServed": [
            "Atlanta",
            "GA",
            "Fulton County",
            "DeKalb County",
            "Cobb County",
            "Gwinnett County"
        ],
        "knowsAbout": [
            "DUI Defense",
            "Criminal Defense",
            "Drug Possession",
            "Traffic Violations",
            "Crimes Against Persons",
            "Expungement",
            "Probation Violation"
        ]
    };

    // Breadcrumb Schema for homepage
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mckeenlawatlanta.com"
            }
        ]
    };

    // FAQ Schema for homepage
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why shouldn't I use a court-appointed attorney?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Court-appointed attorneys handle 200+ cases simultaneously. With McKeen Law, you're not a case number—you're a priority. You receive personal cell phone access, a custom defense strategy, and the resources needed to fight and win your case."
                }
            },
            {
                "@type": "Question",
                "name": "How quickly should I contact a defense attorney after an arrest?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every hour matters. Evidence disappears, witnesses forget, and surveillance footage gets deleted. For DUI cases, you have only 10 days to file an ALS hearing request. Early intervention leads to better deals with prosecutors and preserves critical evidence."
                }
            },
            {
                "@type": "Question",
                "name": "What advantage does a former prosecutor bring to my defense?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shane McKeen prosecuted hundreds of DUI and criminal cases. He knows the prosecutor's playbook because he wrote it. Now he uses that insider knowledge to dismantle their case against you. He's available 24/7 and has deep experience in Atlanta courts."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="json-ld-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="json-ld-localbusiness"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="json-ld-breadcrumb"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Script
                id="json-ld-faq"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        </>
    );
}
