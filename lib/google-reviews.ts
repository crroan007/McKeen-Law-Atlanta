import { unstable_cache } from "next/cache";

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;

export interface GoogleReview {
    author_name: string;
    author_url: string;
    language: string;
    original_language: string;
    profile_photo_url: string;
    rating: number;
    relative_time_description: string;
    text: string;
    time: number;
    translated: boolean;
}

export interface GooglePlaceDetails {
    result: {
        rating: number;
        user_ratings_total: number;
        reviews: GoogleReview[];
    };
    status: string;
}

export async function fetchGoogleReviews(): Promise<GooglePlaceDetails | null> {
    if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
        console.warn("Google Places API Key or Place ID is missing.");
        return null;
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=rating,user_ratings_total,reviews&key=${GOOGLE_PLACES_API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch reviews: ${response.statusText}`);
        }
        const data = await response.json();

        if (data.status !== "OK") {
            console.error("Google Places API Error:", data.status);
            return null;
        }

        return data;
    } catch (error) {
        console.error("Error fetching Google Reviews:", error);
        return null;
    }
}

// Cache the reviews for 24 hours (86400 seconds) to avoid hitting API limits
export const getCachedGoogleReviews = unstable_cache(
    async () => fetchGoogleReviews(),
    ["google-reviews"],
    { revalidate: 86400 }
);
