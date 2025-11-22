import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import GHLChat from "@/components/integrations/GHLChat";
import Schema from "@/components/Schema";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Script from "next/script";

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
            <head>
                <link rel="preconnect" href="https://use.typekit.net/" crossOrigin="" />
                <Script
                    src="https://use.typekit.net/646866.js"
                    strategy="beforeInteractive"
                />
                <Script id="typekit-load" strategy="beforeInteractive">
                    {`try{Typekit.load({ async: true });}catch(e){}`}
                </Script>
            </head>
            <body className={cn("font-serif antialiased bg-slate-50 text-slate-900")}>
                {children}
                <StickyMobileCTA />
                <GHLChat />
                <Schema />
            </body>
        </html>
    );
}
