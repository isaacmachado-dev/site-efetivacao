interface MainDiv {
    title: string;
    secondTitle: string;
    description: string;
}

export function MainDiv({ title, secondTitle, description } : MainDiv) {
    return (
        <>
            <div className="flex flex-col mt-100 gap-2">
                <div className="text-center text-brand-accent">
                    {title}
                </div>

                <div className="text-center text-3xl font-semibold">
                    {secondTitle}
                </div>

                <div className="text-sm">
                    {description}
                </div>
            </div>
        </>
    );
}