"use client";

import Script from "next/script";

export default function GHLChat() {
    return (
        <>
            {/* 
        Replace 'YOUR_LOCATION_ID' with the actual Location ID from GoHighLevel.
        This script usually comes from GHL Settings > Chat Widget 
      */}
            <Script
                id="ghl-chat-widget"
                strategy="lazyOnload"
                src="https://widgets.leadconnectorhq.com/loader.js"
                data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            />
        </>
    );
}
