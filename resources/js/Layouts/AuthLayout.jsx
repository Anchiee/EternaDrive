import { Head } from "@inertiajs/react";
import PropTypes from "prop-types";


export default function AuthLayout({onSubmit, children })
{
  return(
    <>
      <Head>
        <title>Sign-in</title>
        <meta name="description" 
        content="Create an account and start your wonderful experience with seamless file sharing! Start your wonderful journey now"/>
      </Head>
        <section className="min-h-screen flex justify-center items-center">
          <form className="max-w-sm mx-auto bg-white-300 px-19 py-6 rounded-md" onSubmit={onSubmit}>
            <img src="/assets/logo.png" alt="logo" width="100" className="mx-auto"/>
              {children}
          </form>
        </section>
    </>
  )
}


AuthLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
}