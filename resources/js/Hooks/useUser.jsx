import { useForm } from "@inertiajs/react";


export default function useUser(authFields)
{
  const {errors, post, data, setData} = useForm(authFields) 

  const onSubmit = (e, route) => {
    e.preventDefault()
    post(route, data)
  }

  return {onSubmit, setData, errors }
}