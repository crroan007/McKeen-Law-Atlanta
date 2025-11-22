import { Star, Quote } from "lucide-react";
import { getCachedGoogleReviews } from "@/lib/google-reviews";
import ReviewAvatar from "@/components/ReviewAvatar";

export default async function TestimonialsCollage() {
    const data = await getCachedGoogleReviews();

    // 1. Get Real Reviews
    let realReviews: any[] = [];
    if (data?.result?.reviews) {
        realReviews = data.result.reviews
            .filter((review: any) => review.rating === 5) // STRICT 5-STAR FILTER
            .map((review: any) => ({
                ...review,
                isReal: true
            }));
    }

    // Use only real reviews
    const allReviews = realReviews;

    // Insert CTA at index 3 (4th position) - this should place it in middle column of 2nd row
    const displayItems = [...allReviews];
    const insertIndex = Math.min(3, displayItems.length);
    displayItems.splice(insertIndex, 0, { isCTA: true });

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                {/* Masonry Layout using CSS Columns */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {displayItems.map((item, index) => {
                        // Render CTA Card
                        if (item.isCTA) {
                            return (
                                <div key={`cta-${index}`} className="break-inside-avoid bg-brandGreen-900 p-8 rounded-xl shadow-md border border-brandGreen-800 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                                    <Quote className="h-10 w-10 text-gold-500 mb-6" />
                                    <h3 className="font-serif text-2xl font-bold text-white mb-4">
                                        Your Feedback Matters
                                    </h3>
                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        Have you worked with McKeen Law? We'd love to hear your feedback.
                                    </p>
                                    <a
                                        href={`https://search.google.com/local/writereview?placeid=${process.env.GOOGLE_PLACE_ID || 'ChIJVVWliIu-9YgRG0Jg3-xOdh0'}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
                                    >
                                        Write a Review on Google →
                                    </a>
                                </div>
                            );
                        }

                        // Render Review Card
                        const review = item;
                        // Generate initials if not present
                        const initials = review.initials || review.author_name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();

                        return (
                            <div key={index} className="break-inside-avoid bg-cream p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative">
                                {/* Decorative Quote Icon */}
                                <Quote className="absolute top-6 right-6 h-8 w-8 text-gold-500/10" />

                                {/* Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-gold-500 fill-current" />
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                                    "{review.text}"
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                                    <ReviewAvatar
                                        src={review.profile_photo_url}
                                        alt={review.author_name}
                                        initials={initials}
                                    />
                                    <div>
                                        <p className="font-bold text-brandGreen-900 text-sm">{review.author_name}</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                                            {review.isReal && (
                                                <span className="bg-blue-50 text-blue-600 text-[10px] px-1.5 py-0.5 rounded font-medium">
                                                    Google Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
