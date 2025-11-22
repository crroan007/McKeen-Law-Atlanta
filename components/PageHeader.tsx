interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="bg-brandGreen-900 py-20 text-center text-white border-b-4 border-gold-500">
            <div className="container mx-auto px-4">
                <h1 className="font-serif text-4xl font-bold md:text-5xl mb-4">{title}</h1>
                {subtitle && (
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
                )}
                <div className="h-1 w-24 bg-gold-500 mx-auto mt-8"></div>
            </div>
        </div>
    );
}
