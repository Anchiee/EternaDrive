import { Head } from "@inertiajs/react";

export default function AuthLayout({onSubmit, children})
{
  return(
    <>
      <Head title="Sign-in"/>
        <section className="min-h-screen flex justify-center items-center">
          <form className="max-w-sm mx-auto bg-white-300 px-19 py-6 rounded-md" onSubmit={onSubmit}>
            <img src="/assets/logo.png" alt="logo" width="100" className="mx-auto"/>
              {children}
          </form>
        </section>
    </>
  )
}