export type ServicePageContent = {
    title: string;
    metaTitle: string;
    metaDescription: string;
    subtitle: string;
    intro: string;
    highlights: { title: string; description: string }[];
    steps: { title: string; description: string }[];
    localProof: string[];
    faqs: { question: string; answer: string }[];
    cta?: string;
};

export const servicePages: Record<string, ServicePageContent> = {
    "dui-defense": {
        title: "DUI Defense Lawyer in Atlanta",
        metaTitle: "Atlanta DUI Lawyer | McKeen Law",
        metaDescription:
            "Atlanta DUI attorney focused on license protection, refusals, breath/blood test challenges, and fast action with ALS hearings.",
        subtitle: "24/7 DUI help in Atlanta and surrounding counties.",
        intro:
            "You have 30 days to protect your license. We handle ALS hearings, refusals, and breath/blood test challenges for drivers across Metro Atlanta.",
        highlights: [
            { title: "ALS/License Defense", description: "File and defend your ALS hearing within the 30-day deadline." },
            { title: "Test Challenge", description: "Suppress breath, blood, or field test evidence where procedures were flawed." },
            { title: "Refusal Strategy", description: "Mitigate refusal consequences and fight implied consent arguments." },
        ],
        steps: [
            { title: "Case Review", description: "Timeline, stop basis, field test issues, body/dash cam, officer training gaps." },
            { title: "License Action", description: "Immediate ALS filing and hardship pathways where eligible." },
            { title: "Evidence Attack", description: "Challenge probable cause, testing protocol, and rights advisements." },
            { title: "Resolution", description: "Negotiate reductions or prepare for trial with focused pretrial motions." },
        ],
        localProof: [
            "Handled ALS hearings at DDS and Fulton/DeKalb/Cobb/Gwinnett courts.",
            "Experience with local judges and solicitors on refusal and per se cases.",
            "Guidance on Atlanta-area sobriety checkpoints and roadway camera pulls.",
        ],
        faqs: [
            {
                question: "How long do I have to save my license?",
                answer: "You typically have 30 days to request an ALS hearing. We file immediately to protect your driving privileges.",
            },
            {
                question: "Can I fight breath or blood test results?",
                answer: "Yes. We examine calibration, chain of custody, and whether implied consent warnings were properly delivered.",
            },
            {
                question: "What if I refused testing?",
                answer: "Refusal raises stakes for your license, but we can challenge the stop, the request, and how the warning was given.",
            },
        ],
        cta: "Call now for a 24/7 DUI consult and to start the ALS filing.",
    },
    "als-hearings": {
        title: "ALS Hearings & License Protection",
        metaTitle: "ALS Hearings Lawyer Atlanta | Protect Your License",
        metaDescription:
            "Fight your Georgia Administrative License Suspension (ALS). File on time and challenge the stop, implied consent, and testing.",
        subtitle: "File fast, keep driving. Atlanta ALS defense.",
        intro:
            "Georgia’s ALS clock starts immediately. We file within deadlines, challenge implied consent, and seek limited permits when available.",
        highlights: [
            { title: "Deadline Control", description: "We handle filing and represent you at the ALS hearing." },
            { title: "Implied Consent", description: "Attack improper warnings and lack of reasonable grounds." },
            { title: "Permit Guidance", description: "Hardship and limited permits where eligible." },
        ],
        steps: [
            { title: "Timeline Lock", description: "Confirm arrest date, secure DDS records, file ALS request before the deadline." },
            { title: "Evidence Pull", description: "Dash/body cam, officer reports, testing records, and dispatch audio." },
            { title: "Hearing Prep", description: "Cross-examination plan for officer testimony and consent warnings." },
            { title: "Next Moves", description: "Coordinate ALS outcome with criminal DUI strategy to protect both fronts." },
        ],
        localProof: [
            "Regular practice before DDS and Metro Atlanta courts.",
            "Experience with local hearing officers and solicitor expectations.",
            "Guidance on Fulton, DeKalb, Cobb, and Gwinnett county-specific procedures.",
        ],
        faqs: [
            {
                question: "What happens if I miss the ALS deadline?",
                answer: "You can face automatic suspension. We act quickly to file and keep you driving where possible.",
            },
            {
                question: "Do I need to attend the hearing?",
                answer: "We’ll advise based on your case; in many situations we appear and handle the hearing strategy for you.",
            },
            {
                question: "Can an ALS hearing help my DUI case?",
                answer: "Yes. The hearing can surface testimony and evidence that inform motions in the criminal case.",
            },
        ],
        cta: "Call now. ALS deadlines move fast.",
    },
    "refusal-defense": {
        title: "DUI Refusal Defense",
        metaTitle: "Atlanta DUI Refusal Lawyer | Fight Implied Consent",
        metaDescription:
            "Refused breath or blood test? Fight implied consent warnings, license suspension, and refusal evidence in Atlanta courts.",
        subtitle: "Protect your license and challenge implied consent.",
        intro:
            "Refusal cases carry harsh license risks. We challenge implied consent warnings, the lawfulness of the stop, and how the request was delivered.",
        highlights: [
            { title: "Implied Consent Challenges", description: "Attack improper or confusing warnings given roadside or at station." },
            { title: "License Protection", description: "Immediate ALS actions to prevent hard suspension." },
            { title: "Evidence Suppression", description: "Seek to exclude refusal-related evidence and statements." },
        ],
        steps: [
            { title: "Stop Review", description: "Was there probable cause to request testing?" },
            { title: "Warning Analysis", description: "Were the implied consent warnings correct and timely?" },
            { title: "License Defense", description: "File ALS, pursue permits if available, and contest refusal-based suspension." },
            { title: "Case Strategy", description: "Use hearing testimony to support suppression motions in court." },
        ],
        localProof: [
            "Handled refusal cases across Fulton, Cobb, DeKalb, and Gwinnett.",
            "Familiar with local judge expectations on implied consent challenges.",
            "Experience leveraging ALS hearing testimony for criminal defense motions.",
        ],
        faqs: [
            {
                question: "Is refusal evidence admissible?",
                answer: "Often the State will try to use refusal against you. We challenge whether the request and warning were lawful.",
            },
            {
                question: "Can I still drive after refusing?",
                answer: "You risk suspension. Fast ALS filing and strategic permits are key to protecting driving privileges.",
            },
            {
                question: "Does refusing help my case?",
                answer: "It depends. We evaluate stop legality, warnings, and available defenses to guide next steps.",
            },
        ],
        cta: "Call immediately. Refusal cases are time-sensitive.",
    },
    "field-sobriety-tests": {
        title: "Field Sobriety & Roadside Test Challenges",
        metaTitle: "Challenge Field Sobriety Tests | Atlanta DUI Defense",
        metaDescription:
            "Challenge field sobriety tests, checkpoints, and roadside procedures in Atlanta DUI cases. Suppress bad stops and flawed tests.",
        subtitle: "Roadside errors can make or break your DUI case.",
        intro:
            "Field tests are subjective. We challenge the stop, the administration of HGN/Walk-and-Turn/One-Leg Stand, and any checkpoint compliance.",
        highlights: [
            { title: "Stop & Checkpoints", description: "Review legality of the stop or checkpoint plan and execution." },
            { title: "Test Administration", description: "Identify protocol errors and officer training gaps." },
            { title: "Video Evidence", description: "Use dash/body cam to undermine subjective scoring." },
        ],
        steps: [
            { title: "Stop Legality", description: "Reasonable suspicion or checkpoint validity review." },
            { title: "Protocol Audit", description: "Compare officer actions to NHTSA standards." },
            { title: "Motion Practice", description: "File to suppress when procedures or training fall short." },
            { title: "Negotiation/Trial", description: "Leverage weaknesses for reductions or prepare cross-examination." },
        ],
        localProof: [
            "Experience with Atlanta-area sobriety checkpoints and local roadway camera pulls.",
            "Frequent use of dash/body cam from APD and surrounding agencies.",
            "Knowledge of Fulton/DeKalb/Cobb/Gwinnett court expectations on field test challenges.",
        ],
        faqs: [
            {
                question: "Are field sobriety tests mandatory?",
                answer: "They are voluntary in Georgia. We examine whether you were told that and how tests were conducted.",
            },
            {
                question: "Can dash cam video help?",
                answer: "Yes. Video can contradict officer scoring and support suppression or negotiation.",
            },
            {
                question: "Do checkpoints change the rules?",
                answer: "Checkpoints must follow strict plans. We attack deviations to suppress the stop.",
            },
        ],
        cta: "Get a review of your stop and roadside tests now.",
    },
    "dui-drugs": {
        title: "DUI Drugs Defense",
        metaTitle: "Atlanta DUI Drugs Lawyer | Blood/Urine Test Defense",
        metaDescription:
            "Defend against DUI Drugs charges in Atlanta. Challenge blood/urine testing, DRE protocols, and implied consent.",
        subtitle: "Challenge DRE opinions and lab results.",
        intro:
            "DUI Drugs cases hinge on officer observations, DRE opinions, and lab testing. We challenge each step to protect your license and record.",
        highlights: [
            { title: "Lab Challenges", description: "Chain of custody, contamination risk, and reporting gaps." },
            { title: "DRE Protocols", description: "Was a Drug Recognition Expert involved and did they follow standards?" },
            { title: "Medical Factors", description: "Medication, fatigue, and medical conditions that mimic impairment." },
        ],
        steps: [
            { title: "Test Review", description: "Pull lab records, instrument maintenance, and analyst credentials." },
            { title: "Observation Audit", description: "Compare officer notes to video and DRE protocols." },
            { title: "Legal Motions", description: "Move to suppress results or expert opinions when standards fail." },
            { title: "Strategy", description: "Negotiate reductions or prepare for trial with expert support." },
        ],
        localProof: [
            "Experience contesting GBI lab results in Metro Atlanta courts.",
            "Knowledge of DRE protocol compliance issues in local agencies.",
            "Use of medical explanations where supported and appropriate.",
        ],
        faqs: [
            {
                question: "Can prescription meds lead to DUI charges?",
                answer: "Yes. We examine dosing, side effects, and whether observations support impairment.",
            },
            {
                question: "How accurate are blood tests?",
                answer: "They’re only as strong as the collection, custody, and lab protocols. We scrutinize each step.",
            },
            {
                question: "Do I still face license issues?",
                answer: "Yes. DUI Drugs can impact your license; ALS actions and permits must be addressed quickly.",
            },
        ],
        cta: "Call for a review of your lab results and DRE findings.",
    },
    "cdl-dui": {
        title: "CDL & Commercial DUI Defense",
        metaTitle: "Atlanta CDL DUI Lawyer | Protect Your Commercial License",
        metaDescription:
            "Protect your CDL after a DUI in Georgia. Lower BAC thresholds and strict rules require fast action on license and criminal defense.",
        subtitle: "CDL at risk? Act fast to save your livelihood.",
        intro:
            "Commercial drivers face lower DUI thresholds and tougher license consequences. We move quickly on ALS filings and defense tailored to CDL rules.",
        highlights: [
            { title: "Lower BAC Thresholds", description: "Challenge stops and testing under CDL standards." },
            { title: "License Impact", description: "Protect CDL privileges and pursue work permits where possible." },
            { title: "Employment-Safe Strategy", description: "Minimize criminal record impact for employer checks." },
        ],
        steps: [
            { title: "Timeline & Employer Impact", description: "Understand employer and clearinghouse implications." },
            { title: "Stop/Test Review", description: "Attack probable cause, calibration, and consent warnings." },
            { title: "ALS & Permit", description: "File ALS promptly and advise on CDL-specific options." },
            { title: "Resolution Plan", description: "Negotiate reductions or prepare motions/trial tailored to CDL exposure." },
        ],
        localProof: [
            "Handled CDL DUI cases across Fulton, Cobb, DeKalb, and Gwinnett.",
            "Familiar with commercial implications for Metro Atlanta drivers.",
            "Coordinate with employment needs and clearance requirements.",
        ],
        faqs: [
            {
                question: "Is the BAC limit lower for CDL holders?",
                answer: "Yes. We challenge testing and legality of the stop under CDL standards.",
            },
            {
                question: "Will I lose my job?",
                answer: "Rapid ALS action and charge strategy aim to protect your CDL; outcomes depend on facts and employer policies.",
            },
            {
                question: "Can I get a permit?",
                answer: "Options are limited for CDL, but we pursue every available pathway and mitigation.",
            },
        ],
        cta: "Contact us immediately to protect your CDL.",
    },
    "under-21-dui": {
        title: "Under-21 DUI Defense",
        metaTitle: "Under-21 DUI Lawyer in Atlanta | Protect Your Future",
        metaDescription:
            "Defend under-21 DUI charges in Atlanta. Address lower BAC limits, license risks, and school/employment impacts.",
        subtitle: "Lower limits, higher stakes for students and young drivers.",
        intro:
            "Georgia holds drivers under 21 to stricter standards. We focus on license protection, mitigation, and long-term record impact.",
        highlights: [
            { title: "Lower BAC Threshold", description: "Challenge testing and stop validity with under-21 standards." },
            { title: "License Protection", description: "Fight suspensions and pursue limited permits when allowed." },
            { title: "Future-Safe Strategy", description: "Mitigate school, scholarship, and job impacts." },
        ],
        steps: [
            { title: "Stop/Test Review", description: "Attack probable cause, device accuracy, and implied consent warnings." },
            { title: "License Defense", description: "File ALS and explore permit options where possible." },
            { title: "Mitigation Plan", description: "Use education, treatment, and character support to influence outcomes." },
            { title: "Case Resolution", description: "Negotiate reductions or prepare motions/trial focused on future consequences." },
        ],
        localProof: [
            "Experience with under-21 cases in Fulton, Cobb, DeKalb, and Gwinnett.",
            "Guidance on school/parent notification concerns and court expectations.",
            "Knowledge of youth-specific diversion/mitigation options where available.",
        ],
        faqs: [
            {
                question: "What BAC applies if I’m under 21?",
                answer: "Georgia uses a far lower limit for under-21 drivers; we scrutinize the test and stop.",
            },
            {
                question: "Will I lose my license?",
                answer: "License risk is high. We act quickly on ALS filings and permit options.",
            },
            {
                question: "Can this affect school or jobs?",
                answer: "Yes. We build mitigation to protect your record and opportunities.",
            },
        ],
        cta: "Call now to protect your license and future options.",
    },
    "reckless-driving": {
        title: "Reckless Driving & Serious Traffic Defense",
        metaTitle: "Reckless Driving Lawyer in Atlanta | Serious Traffic Defense",
        metaDescription:
            "Fight reckless driving and serious traffic charges in Atlanta. Protect your license, insurance, and record.",
        subtitle: "Protect your license and record from serious traffic charges.",
        intro:
            "Reckless and serious traffic charges can spike insurance and risk your license. We fight the stop, evidence, and negotiate smart resolutions.",
        highlights: [
            { title: "License & Insurance", description: "Protect points, suspensions, and downstream insurance costs." },
            { title: "Evidence Review", description: "Challenge radar/lidar proof, officer observations, and procedure." },
            { title: "Resolution Paths", description: "Pursue reductions, defensive driving options, or trial where needed." },
        ],
        steps: [
            { title: "Evidence Pull", description: "Dash/body cam, speed device records, and report review." },
            { title: "Legal Challenges", description: "Suppress unlawful stops; question device calibration and use." },
            { title: "Mitigation", description: "Driving history, defensive driving, and tailored resolutions." },
            { title: "Outcome", description: "Seek reductions that preserve license and insurance standing." },
        ],
        localProof: [
            "Experience across Metro Atlanta courts for reckless/serious traffic cases.",
            "Familiar with device calibration requirements and officer testimony patterns.",
            "Local resolution expectations for defensive driving and reductions.",
        ],
        faqs: [
            {
                question: "Will reckless driving suspend my license?",
                answer: "It can contribute to suspension risk. We protect points and pursue reductions.",
            },
            {
                question: "Can I avoid insurance spikes?",
                answer: "Strategic reductions and mitigation can protect insurance; results depend on facts and carrier rules.",
            },
            {
                question: "Is trial worth it?",
                answer: "We evaluate evidence strength and local judge/solicitor expectations before recommending trial.",
            },
        ],
        cta: "Get a plan to protect your license and insurance.",
    },
    "bui-defense": {
        title: "Boating Under the Influence (BUI) Defense",
        metaTitle: "Atlanta BUI Lawyer | Boating Under the Influence Defense",
        metaDescription:
            "Defend BUI charges in Georgia. Challenge boat stops, field sobriety on water, and testing for boating cases.",
        subtitle: "Challenge stops and waterside testing.",
        intro:
            "BUI stops and testing differ from roadway DUIs. We challenge the stop, boarding authority, and waterside testing protocols.",
        highlights: [
            { title: "Stop Authority", description: "Analyze boarding/stop justification and safety-check pretext." },
            { title: "Waterside Testing", description: "Challenge non-standardized balance tests on boats/docks." },
            { title: "License Impact", description: "Address boating privileges and any driver’s license implications." },
        ],
        steps: [
            { title: "Stop Review", description: "Boarding authority, reason, and compliance with BUI rules." },
            { title: "Test Protocols", description: "Non-standardized tests and implied consent on water." },
            { title: "Evidence Motions", description: "Suppress when stops or tests fail legal standards." },
            { title: "Resolution", description: "Negotiate reductions or proceed to trial based on facts." },
        ],
        localProof: [
            "Knowledge of Georgia boating enforcement practices.",
            "Experience challenging waterside tests and implied consent issues.",
            "Strategy tailored to Metro Atlanta boaters and nearby lakes.",
        ],
        faqs: [
            {
                question: "Do DUI rules apply on the water?",
                answer: "Similar principles apply, but stops/testing differ. We attack unlawful boarding and shaky tests.",
            },
            {
                question: "Can I lose my driving license?",
                answer: "BUI primarily targets boating privileges, but we examine all license impacts.",
            },
            {
                question: "Are field tests on boats reliable?",
                answer: "They’re often less reliable. We challenge balance tests done on unstable surfaces.",
            },
        ],
        cta: "Call for a BUI defense review today.",
    },
    "dui-alcohol": {
        title: "Per Se / DUI Alcohol Defense",
        metaTitle: "Atlanta DUI Alcohol Lawyer | Per Se DUI Defense",
        metaDescription: "Fight per se DUI alcohol charges in Atlanta. Challenge stops, testing, and implied consent to protect your license and record.",
        subtitle: "Per se DUI defense for Metro Atlanta drivers.",
        intro: "Per se DUI charges rely on BAC numbers, but numbers can be wrong. We challenge the stop, the testing device, and implied consent warnings to protect your license and record.",
        highlights: [
            { title: "Breath/Blood Test Challenges", description: "Calibration, maintenance, chain of custody, and analyst credentials." },
            { title: "Stop & Probable Cause", description: "Suppress unlawful stops or checkpoint deviations." },
            { title: "License Protection", description: "Immediate ALS filings and permit guidance to keep you driving." },
        ],
        steps: [
            { title: "Evidence Review", description: "Dash/body cam, stop basis, and testing paperwork." },
            { title: "Testing Audit", description: "Device maintenance, operator certification, and lab protocols." },
            { title: "Implied Consent", description: "Were warnings correct and timely? Attack flaws." },
            { title: "Resolution", description: "Negotiate reductions or pursue suppression/trial based on gaps." },
        ],
        localProof: [
            "Handled per se DUI cases across Fulton, Cobb, DeKalb, and Gwinnett.",
            "Experience challenging Intoxilyzer and blood draw procedures in Metro Atlanta courts.",
            "Familiar with solicitor expectations for reductions in borderline BAC cases.",
        ],
        faqs: [
            { question: "Is a high BAC unbeatable?", answer: "No. We scrutinize device accuracy, procedure, and stop legality." },
            { question: "Do I have to appear in court?", answer: "We advise based on the stage and judge; we often appear on your behalf early." },
            { question: "Will I lose my license?", answer: "We act fast on ALS filings and explore permit options to keep you driving." },
        ],
        cta: "Call now. Per se DUI timelines move quickly.",
    },
    "dui-serious-injury": {
        title: "DUI with Serious Injury Defense",
        metaTitle: "Serious Injury DUI Lawyer in Atlanta | Felony DUI Defense",
        metaDescription: "Defend DUI serious injury charges in Atlanta. Protect your record, challenge evidence, and manage high-stakes exposure.",
        subtitle: "High-stakes DUI defense when serious injury is alleged.",
        intro: "Serious injury DUIs carry severe penalties and felony exposure. We challenge stop, testing, causation, and fight to protect your freedom and record.",
        highlights: [
            { title: "Causation & Evidence", description: "Scrutinize whether alleged injuries are tied to impairment." },
            { title: "Testing & Procedure", description: "Attack breath/blood protocols and implied consent." },
            { title: "Mitigation", description: "Early mitigation and expert input to influence charging and outcomes." },
        ],
        steps: [
            { title: "Case Intake", description: "Timeline, injury reports, medical records, and scene evidence." },
            { title: "Evidence Pull", description: "Dash/body cam, accident reconstruction, lab data." },
            { title: "Motion Practice", description: "Suppress unlawful stops/tests; challenge causation and statements." },
            { title: "Resolution Strategy", description: "Negotiate charge reductions or prepare for trial with experts." },
        ],
        localProof: [
            "Experience with serious injury DUIs in Fulton and Metro Atlanta courts.",
            "Coordinate with accident reconstruction and medical review where needed.",
            "Knowledge of local prosecutorial expectations on felony DUI negotiations.",
        ],
        faqs: [
            { question: "Is this a felony?", answer: "Serious injury DUIs can be felonies. We move quickly to assess exposure and defenses." },
            { question: "Do I need experts?", answer: "Often yes. Accident reconstruction and medical experts can challenge causation." },
            { question: "What about my license?", answer: "ALS filings and permit options still apply and are handled alongside the criminal case." },
        ],
        cta: "Contact us immediately. Felony exposure demands fast action.",
    },
    "dui-child-endangerment": {
        title: "DUI with Child Endangerment Defense",
        metaTitle: "DUI Child Endangerment Lawyer Atlanta | Protect Your Future",
        metaDescription: "Defend DUI with child endangerment charges in Atlanta. Reduce exposure and protect your record and family.",
        subtitle: "Protect your family, record, and license.",
        intro: "DUI with child endangerment raises penalties and personal stakes. We challenge the stop, testing, and seek resolutions that protect your family and record.",
        highlights: [
            { title: "Penalty Mitigation", description: "Strategies to reduce or separate child-related counts." },
            { title: "Testing Challenges", description: "Review breath/blood protocols and implied consent warnings." },
            { title: "Family Impact", description: "Address personal and professional fallout directly." },
        ],
        steps: [
            { title: "Case Review", description: "Stop basis, testing, and circumstances involving passengers." },
            { title: "Evidence Audit", description: "Video, reports, and testing records for errors." },
            { title: "Mitigation Plan", description: "Character references, parenting stability, and proactive steps." },
            { title: "Negotiation/Trial", description: "Pursue reductions and defend vigorously where needed." },
        ],
        localProof: [
            "Handled child endangerment-related DUI cases in Metro Atlanta courts.",
            "Experience with local judicial expectations on mitigation and safety plans.",
            "Knowledge of solicitor approaches to negotiated outcomes in sensitive cases.",
        ],
        faqs: [
            { question: "Will this affect custody?", answer: "It can. We address legal strategy and practical steps to protect your family." },
            { question: "Can charges be reduced?", answer: "With strong defense and mitigation, reductions may be possible based on facts." },
            { question: "Do I lose my license?", answer: "We take immediate steps to protect your license via ALS filings and permits." },
        ],
        cta: "Call now to protect your family and your record.",
    },
    "emergency-dui": {
        title: "24/7 Emergency DUI Lawyer",
        metaTitle: "Emergency DUI Lawyer Atlanta | 24/7 DUI Help",
        metaDescription: "Arrested for DUI in Atlanta? Get 24/7 help to protect your license and case. Fast ALS filing and defense strategy.",
        subtitle: "Arrested tonight? Call now. Deadlines move fast.",
        intro: "If you’ve just been arrested, the clock is already running on your license. We file ALS requests, review your stop, and start protecting your record immediately.",
        highlights: [
            { title: "Immediate ALS Action", description: "File fast to protect your license and explore permits." },
            { title: "Stop & Test Review", description: "Check for bad stops, checkpoint issues, and testing errors." },
            { title: "Next-Step Plan", description: "Clear guidance on court dates, evidence, and mitigation." },
        ],
        steps: [
            { title: "Rapid Intake", description: "Timeline, paperwork, and immediate ALS filing." },
            { title: "Evidence Pull", description: "Request video, reports, and test records quickly." },
            { title: "Mitigation Start", description: "Early actions to improve outcomes (treatment/education where appropriate)." },
            { title: "Defense Strategy", description: "Tailor approach for refusal, per se, CDL, or under-21 scenarios." },
        ],
        localProof: [
            "Available for Metro Atlanta arrests across Fulton, DeKalb, Cobb, and Gwinnett.",
            "Experience coordinating quick ALS filings and first appearance prep.",
            "Guidance on immediate steps after release to protect your case.",
        ],
        faqs: [
            { question: "How fast do I need to act?", answer: "ALS deadlines can hit within 30 days. We file right away to protect your license." },
            { question: "What if I refused?", answer: "Refusals heighten license risks. We address implied consent and stop legality immediately." },
            { question: "Can you appear for me?", answer: "We advise on appearances and often handle early court dates for clients." },
        ],
        cta: "Call 678.568.9135 now for 24/7 response to DUI arrests.",
    },
    "license-suspension": {
        title: "License Suspension Defense",
        metaTitle: "License Suspension Defense | Atlanta DUI & Traffic",
        metaDescription: "Fight license suspension in Georgia. ALS filings, permits, and strategy for DUI and serious traffic cases.",
        subtitle: "Protect your license after DUI or serious traffic charges.",
        intro: "License loss impacts work and family. We act fast on ALS filings, permits, and court strategy to keep you driving.",
        highlights: [
            { title: "ALS Filings", description: "File within deadlines to avoid automatic suspensions." },
            { title: "Permits & Hardship", description: "Explore limited permits where available." },
            { title: "Defense Link", description: "Align license strategy with your DUI/traffic defense plan." },
        ],
        steps: [
            { title: "Timeline Check", description: "Confirm deadlines and current status with DDS." },
            { title: "Evidence Review", description: "Stop basis, testing records, and prior history." },
            { title: "Filing & Hearing", description: "Submit ALS, attend hearings, and present defenses." },
            { title: "Case Coordination", description: "Sync license defense with overall case strategy." },
        ],
        localProof: [
            "Handled license suspensions tied to DUI and serious traffic in Metro Atlanta.",
            "DDS and local court experience for hearings and filings.",
            "Permit guidance for Fulton, Cobb, DeKalb, and Gwinnett drivers.",
        ],
        faqs: [
            { question: "Do I qualify for a permit?", answer: "Depends on the charge and history. We review options immediately." },
            { question: "What if I missed the deadline?", answer: "Act fast; we look for remaining options to minimize damage." },
            { question: "Does fighting the case help the license?", answer: "Yes. Hearings and motions can influence license outcomes." },
        ],
        cta: "Call now to protect your license before deadlines hit.",
    },
};
