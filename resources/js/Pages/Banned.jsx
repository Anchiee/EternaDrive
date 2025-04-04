import CenteredCardLayout from "@/Layouts/CenteredCardLayout"
import { usePage } from "@inertiajs/react"

export default function Banned() {

    const {auth} = usePage().props

    const expirationDate = new Date(auth.user.ban_expires_at)
    const expirationYear = expirationDate.getFullYear()
    const expirationMonth = String(expirationDate.getMonth() + 1).padStart(2, "0")
    const expirationDay = String(expirationDate.getDate()).padStart(2, "0")

    const formattedDate = `${expirationDay}-${expirationMonth}-${expirationYear}`


    return(
        <CenteredCardLayout 
        title="Banned" 
        description="Unfortunately you have been banned. If it's a mistake by our side contact us immediately.">
            <h1 className="font-semibold">You have been banned.</h1>
            <p>Expires at {formattedDate}</p>
            <p>Banned for: {auth.user.ban_reason}</p>
            <p>For either more info or contact message us.</p>
        </CenteredCardLayout>
    )
}