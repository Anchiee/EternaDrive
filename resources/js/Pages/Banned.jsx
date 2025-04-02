import CenteredCardLayout from "@/Layouts/CenteredCardLayout"


export default function Banned() {
    return(
        <CenteredCardLayout 
        title="Banned" 
        description="Unfortunately you have been banned. If it's a mistake by our side contact us immediately.">
            <h1>You have been banned.</h1>
            <p>For either more info or contact message us.</p>
        </CenteredCardLayout>
    )
}