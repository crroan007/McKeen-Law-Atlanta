import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
}

export default function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-cream p-8 transition-all hover:border-gold-500 hover:shadow-lg"
        >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brandGreen-900/5 text-brandGreen-900 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-serif text-xl font-bold text-brandGreen-900 group-hover:text-gold-500 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-gold-500">
                Learn More <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
        </Link>
    );
}
