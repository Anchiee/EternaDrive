import { Head, Link } from "@inertiajs/react";

export default function verifyEmail() {

  return(
    <>
      <Head title="Verify email"/>

      <section className="h-full flex justify-center items-center">
        <div className="bg-white-300 py-6 px-8 rounded-md">
          <h1 className="font-bold">EMAIL VERIFICATION</h1>
          <p>Email verification link has been sent, please verify your email to proceed further.</p>

          <Link method="post" href={route("verification.send")} as="button"
          className="bg-red-800 text-white-300 rounded-md py-2 cursor-pointer text-base
          hover:bg-red-900 transition-all px-4 my-3">Send the link again</Link>
        </div>
      </section>
    </>
  )
}