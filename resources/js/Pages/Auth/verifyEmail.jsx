import { Link } from "@inertiajs/react";
import CenteredCardLayout from "@/Layouts/CenteredCardLayout";

export default function verifyEmail() {

  return(
    <CenteredCardLayout title="Verify email">
      <h1 className="font-bold text-red-800 tracking-wider">EMAIL VERIFICATION</h1>
      <p>Email verification link has been sent, please verify your email to proceed further.</p>

      <Link method="post" href={route("verification.send")} as="button"
      className="bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-base
      hover:bg-red-900 transition-all px-4 my-3">Send again</Link>
    </CenteredCardLayout>
  )
}