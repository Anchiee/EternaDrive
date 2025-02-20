import AnimatedComponent from "@/Components/AnimatedComponent"
import PopUpProvider from "@/ContextsProviders/PopUpProvider"


export default function EditUserLayout({children, onSubmit})
{
  return(
  <PopUpProvider>
    <section className="size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent-500">
      <AnimatedComponent>
        <div className="size-full flex justify-center items-center">
          <form className="bg-white-300 pl-8 pr-19 py-6 rounded-md" onSubmit={(e) => onSubmit(e, "/settings")}>
            {children}
          </form>
        </div>
      </AnimatedComponent>
    </section>
  </PopUpProvider>
  )
}