import { LuAlertCircle } from "react-icons/lu"

interface FormErrorProps {
    message?: string
}

export default function FormError({ message }: FormErrorProps) {
    if (!message) return null

    return (
        <div className="bg-destructive/10 py-2 px-4 rounded-md flex items-center gap-2 text-destructive">
            <LuAlertCircle className="w-4 h-4" />
            <p>{message}</p>
        </div>

    )
}