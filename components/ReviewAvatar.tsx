"use client";

import { useState } from "react";

interface ReviewAvatarProps {
    src?: string;
    alt: string;
    initials: string;
}

export default function ReviewAvatar({ src, alt, initials }: ReviewAvatarProps) {
    const [imageError, setImageError] = useState(false);

    if (src && !imageError) {
        return (
            <img
                src={src}
                alt={alt}
                className="w-10 h-10 rounded-full object-cover"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
            />
        );
    }

    return (
        <div className="w-10 h-10 rounded-full bg-brandGreen-100 flex items-center justify-center flex-shrink-0">
            <span className="text-brandGreen-900 font-bold">{initials}</span>
        </div>
    );
}
