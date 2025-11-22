import type { Metadata } from "next";
import { Montserrat, EB_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GHLChat from "@/components/integrations/GHLChat";
import Schema from "@/components/Schema";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-eb-garamond" });

export const metadata: Metadata = {
    title: "McKeen Law Atlanta | Criminal Defense Attorney",
    description: "Experienced criminal defense attorney in Atlanta, GA. Specializing in DUI, drug possession, and serious traffic offenses.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(montserrat.variable, ebGaramond.variable, "font-sans antialiased bg-slate-50 text-slate-900")}>
                {children}
                <StickyMobileCTA />
                <GHLChat />
                <Schema />
            </body>
        </html>
    );
}
