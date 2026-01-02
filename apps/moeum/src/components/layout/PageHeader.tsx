export default function PageHeader({ pageName }: { pageName: string }) {
    return (
        <div className="flex justify-start">
            <span className="text-2xl font-bold">{pageName}</span>
        </div>
    )
}