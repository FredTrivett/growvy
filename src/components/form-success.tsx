import { LuCheckCircle } from "react-icons/lu"

interface FormSuccessProps {
    message?: string
}

export default function FormSuccess({ message }: FormSuccessProps) {
    if (!message) return null

    return (
        <div className="bg-emerald-500/10 py-2 px-4 rounded-md flex items-center gap-2 text-emerald-500">
            <LuCheckCircle className="w-4 h-4" />
            <p>{message}</p>
        </div>

    )
}