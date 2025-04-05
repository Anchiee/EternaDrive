import CenteredCardLayout from "@/Layouts/CenteredCardLayout"
import { usePage } from "@inertiajs/react"

export default function Banned() {

    const {auth} = usePage().props

    const expirationDate = new Date(auth.user.ban_expires_at)
    const expirationYear = expirationDate.getFullYear()
    const expirationMonth = String(expirationDate.getMonth() + 1).padStart(2, "0")
    const expirationDay = String(expirationDate.getDate()).padStart(2, "0")

    const formattedDate = `${expirationDay}-${expirationMonth}-${expirationYear}`

    const currentDate = new Date()
    const interval = Math.abs(currentDate.getTime() - expirationDate.getTime())
    const dayInterval = Math.round(interval / (1000 * 3600 * 24))


    return(
        <CenteredCardLayout 
        title="Banned" 
        description="Unfortunately you have been banned. If it's a mistake by our side contact us immediately.">
            <h1 className="font-semibold text-red-800 mb-3 mt-3">YOU HAVE BEEN BANNED</h1>

            <p className="my-1">
                <span className="font-semibold mr-1">Expires at:</span>
                {formattedDate}
            </p>

            <p className="my-1">
                <span className="font-semibold mr-1">Banned for:</span>
                {auth.user.ban_reason}
            </p>

            <p className="my-1">
                <span className="font-semibold mr-1">Days until expiration:</span>
                {dayInterval}
            </p>

            <p className="border-t-[1px] border-t-gray-300 mt-3 pt-2">
                For more contact message us at 
                <a href="mailto:wyhwtf@gmail.com" className="font-semibold ml-1">wyhwtf@gmail.com</a>
            </p>
        </CenteredCardLayout>
    )
}