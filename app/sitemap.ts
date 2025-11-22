import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mckeenlawatlanta.com' // Replace with actual domain

    // Core pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/practice-areas',
        '/attorney',
        '/testimonials',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }))

    // Service pages (Static list for now, would be dynamic in real app)
    const services = [
        'dui-defense',
        'als-hearings',
        'license-suspension',
        'refusal-defense',
        'field-sobriety-tests',
        'dui-drugs',
        'cdl-dui',
        'under-21-dui',
        'bui-defense',
        'reckless-driving',
        'dui-alcohol',
        'dui-serious-injury',
        'dui-child-endangerment',
        'emergency-dui',
    ].map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const locations = ['fulton', 'dekalb', 'cobb', 'gwinnett'].map((city) => ({
        url: `${baseUrl}/locations/${city}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...services, ...locations]
}
