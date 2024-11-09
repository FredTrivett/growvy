interface HeaderProps {
    label: string;
    description?: string;
}

export const Header = ({ label, description }: HeaderProps) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-6xl bg-text-gradient bg-clip-text text-transparent font-bold leading-[0.8]">{label}</h1>
            {description && (
                <p className="text-neutral-900 text-lg">
                    {description}
                </p>
            )}
        </div>
    )
};
