"use client";

import { useEffect } from "react";

export default function GHLForm() {
    useEffect(() => {
        // This function handles the resizing of the iframe if GHL provides a script for it
        const handleMessage = (e: MessageEvent) => {
            if (e.data && e.data.action === 'resize' && e.data.height) {
                const iframe = document.getElementById('ghl-form-iframe') as HTMLIFrameElement;
                if (iframe) iframe.style.height = e.data.height + 'px';
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div className="w-full">
            {/* Replace src with the actual form embed URL from GHL */}
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
                style={{ width: '100%', border: 'none', minHeight: '500px' }}
                scrolling="no"
                id="ghl-form-iframe"
            ></iframe>
        </div>
    );
}
