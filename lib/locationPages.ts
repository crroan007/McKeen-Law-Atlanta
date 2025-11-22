export type LocationPageContent = {
    name: string;
    header: string;
    subtitle: string;
    intro: string;
    services: { title: string; description: string; href: string }[];
    courts: string[];
    proof: string[];
    faqs: { question: string; answer: string }[];
};

export const locationPages: Record<string, LocationPageContent> = {
    fulton: {
        name: "Fulton County",
        header: "DUI & Criminal Defense in Fulton County",
        subtitle: "Local counsel for Fulton County courts, judges, and prosecutors.",
        intro: "We defend DUI and criminal cases across Fulton County, with experience in downtown and North Fulton courts. We move quickly on ALS filings and court strategy tailored to local expectations.",
        services: [
            { title: "Fulton DUI Defense", description: "ALS filings, refusals, test challenges.", href: "/dui-defense" },
            { title: "License Protection", description: "ALS hearings and permit guidance.", href: "/als-hearings" },
            { title: "Reckless & Serious Traffic", description: "Protect points, insurance, and license.", href: "/reckless-driving" },
            { title: "CDL/Commercial DUI", description: "Lower thresholds and employment-safe strategies.", href: "/cdl-dui" },
        ],
        courts: [
            "Fulton County State Court (Downtown)",
            "Fulton County DUI Court programs (where applicable)",
            "Atlanta Municipal Court (for city arrests)",
        ],
        proof: [
            "Experience with Fulton solicitors and judges on DUI and serious traffic resolutions.",
            "Knowledge of downtown courtroom procedures, parking, and scheduling.",
            "Familiarity with checkpoint locations and APD stop patterns.",
        ],
        faqs: [
            { question: "Where will my case be heard?", answer: "Most Fulton DUIs file in State Court; some begin in Municipal. We confirm venue and handle transfers as needed." },
            { question: "Do I need to appear at first?", answer: "We advise per case; we often appear for early dates and guide you on attendance." },
            { question: "Can you help with license issues?", answer: "Yes—ALS filings and permit options are handled immediately with your Fulton case." },
        ],
    },
    dekalb: {
        name: "DeKalb County",
        header: "DUI & Criminal Defense in DeKalb County",
        subtitle: "Focused on DeKalb courts, judges, and solicitor expectations.",
        intro: "DeKalb DUIs move quickly. We file ALS hearings, challenge stops and tests, and tailor mitigation to local practices.",
        services: [
            { title: "DeKalb DUI Defense", description: "Refusals, per se DUIs, and test suppression.", href: "/dui-defense" },
            { title: "Under-21 & CDL", description: "Protect young drivers and commercial licenses.", href: "/under-21-dui" },
            { title: "Field Test Challenges", description: "Checkpoints and roadside test reviews.", href: "/field-sobriety-tests" },
            { title: "Reckless / Serious Traffic", description: "Insurance and license protection.", href: "/reckless-driving" },
        ],
        courts: [
            "DeKalb County State Court",
            "Recorder’s Court (certain traffic matters)",
            "Local municipal courts for city arrests (e.g., Dunwoody, Decatur)",
        ],
        proof: [
            "Experience with DeKalb State Court procedures and solicitor preferences.",
            "Knowledge of local police practices and common checkpoint areas.",
            "Guidance on parking, scheduling, and municipal transfers when needed.",
        ],
        faqs: [
            { question: "Will my case stay in municipal court?", answer: "Many DUIs transfer to State Court. We manage venue and timelines." },
            { question: "How fast do I need to file ALS?", answer: "ALS deadlines are tight—typically 30 days. We file immediately." },
            { question: "Do DeKalb judges allow virtual appearances?", answer: "Policies vary; we advise for each courtroom and date." },
        ],
    },
    cobb: {
        name: "Cobb County",
        header: "DUI & Criminal Defense in Cobb County",
        subtitle: "Local insight for Cobb solicitors and judges.",
        intro: "Cobb DUI and traffic cases demand fast action on ALS and tailored negotiation. We challenge stops, tests, and protect your license.",
        services: [
            { title: "Cobb DUI Defense", description: "ALS filings, refusals, and breath/blood challenges.", href: "/dui-defense" },
            { title: "CDL/Commercial", description: "Protect your CDL and employment standing.", href: "/cdl-dui" },
            { title: "Serious Traffic", description: "Reckless and super speeder defense.", href: "/reckless-driving" },
            { title: "License Suspension Defense", description: "Deadlines and permit guidance.", href: "/license-suspension" },
        ],
        courts: [
            "Cobb County State Court",
            "Cobb DUI Court programs (where eligible)",
            "Municipal courts (e.g., Marietta, Smyrna) for local arrests",
        ],
        proof: [
            "Familiar with Cobb State Court requirements and local solicitor expectations.",
            "Experience with municipal transfers into State Court.",
            "Knowledge of local officer practices and speed enforcement routes.",
        ],
        faqs: [
            { question: "Will I get DUI Court?", answer: "Eligibility depends on facts and history; we advise and negotiate options." },
            { question: "How do super speeder charges work?", answer: "We fight the underlying charge and address DDS super speeder fees." },
            { question: "Can I drive for work?", answer: "We pursue permit options and coordinate with your employer needs where possible." },
        ],
    },
    gwinnett: {
        name: "Gwinnett County",
        header: "DUI & Criminal Defense in Gwinnett County",
        subtitle: "Ready for Gwinnett’s docket pace and prosecutor expectations.",
        intro: "Gwinnett runs a busy DUI docket. We move quickly on ALS filings, evidence pulls, and negotiate based on local practices.",
        services: [
            { title: "Gwinnett DUI Defense", description: "Refusals, per se, and checkpoint challenges.", href: "/dui-defense" },
            { title: "Field & Checkpoints", description: "Challenge roadside tests and checkpoint compliance.", href: "/field-sobriety-tests" },
            { title: "Under-21 / School Impact", description: "Protect young drivers’ records.", href: "/under-21-dui" },
            { title: "License Protection", description: "ALS hearings and permit guidance.", href: "/als-hearings" },
        ],
        courts: [
            "Gwinnett County Recorder’s Court (initial)",
            "State Court of Gwinnett County (post-transfer)",
            "Municipal courts for city-origin arrests within Gwinnett",
        ],
        proof: [
            "Experience navigating Recorder’s Court to State Court transfers.",
            "Knowledge of local checkpoint areas and GCPD practices.",
            "Guidance on parking, scheduling, and expected timelines.",
        ],
        faqs: [
            { question: "Does my case stay in Recorder’s Court?", answer: "Many DUIs transfer to State Court. We manage transfers and timing." },
            { question: "Can I avoid a license suspension?", answer: "We file ALS quickly and pursue permits; success depends on facts and deadlines." },
            { question: "Do I need to appear?", answer: "We advise by case and court; we often appear for early hearings and guide attendance." },
        ],
    },
};
