import { Head } from "@inertiajs/react"
import AppLayout from "@/Layouts/AppLayout"

export default function Home()
{


  return (

    <>
      <Head title="Home"/>
      <AppLayout>

        <section className="h-full flex flex-col">

          <section className="min-h-screen flex flex-row justify-between items-center mb-5 grow-0">
            <div>
              <h1 className="font-bold text-red-800 text-xl tracking-wider">OFTEN WORRIED ABOUT YOUR MEMORY?</h1>
              <p className="text-white-300 text-xs w-2/3">
                With Eternadrive, your precious memories and files are safe, secure, and always accessible—anytime, anywhere.
              </p>
            </div>

            <div>
              <h1 className="font-bold text-red-800 text-xl tracking-wider">
                JOIN A THRIVING COMMUNITY OF SATISFIED USERS
              </h1>
              <p className="text-white-300 text-xs w-2/3">
                Discover why thousands trust Eternadrive to store, share, and protect what matters most.
              </p>
            </div>
          </section>

          <section className="w-full grow-1 pb-8">
            <h2 
            className="font-bold text-red-800 text-xl tracking-wider border-b-2 border-b-red-800 w-full mb-10">ABOUT US</h2>
            <div className="flex flex-col gap-10">
              {[
                {
                  question: "What is Eternadrive?", 
                  answer: "Eternadrive is a secure and easy-to-use file-sharing platform that allows you to store, share, and protect your files anytime, anywhere."
                },
                {
                  question: "How do I share files with others?",
                  answer: "After uploading a file, click the 'Share' button and generate a link. You can send this link to anyone you want to share the file with."
                },
                {
                  question: "Is my data safe on Eternadrive?",
                  answer: "Yes, Eternadrive uses advanced encryption and security measures to ensure your files and personal information are always protected."
                },
                {
                  question: "Is Eternadrive free to use?",
                  answer: "Yes, Eternadrive offers a free plan with basic features. We also have premium plans for users who need more storage and advanced features."
                },
                {
                  question: "How do I reset my password?",
                  answer:"Click the 'Forgot Password' link on the login page and follow the instructions to reset your password."
                },
              ].map((faq, index) => (
                <div key={index}>
                  <h3 className=" text-red-800 text-xl tracking-wider">{faq.question}</h3>
                  <p className="text-white-300 text-xs">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
         
        </section>

      </AppLayout>
    </>

  )
}