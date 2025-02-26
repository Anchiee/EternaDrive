import { useForm } from "@inertiajs/react";


export default function useUser(authFields)
{
  const {errors, post, put, delete: destroy, data, setData} = useForm(authFields) 

  const onSubmit = (e, route, routeMethod = "post") => {
    e.preventDefault()

    switch(routeMethod)
    {
      case "post":
        post(route, data)
        break
      case "delete":
        destroy(route, data)
        break
      case "put":
        put(route, data)
        break
    }
    
  }

  const fileRequest = (route, routeMethod = "post") => {

    switch(routeMethod)
    {
      case "post":
        post(route, data)
        break
      case "delete":
        destroy(route, data)
        break
      case "put":
        put(route, data)
        break
    }
    
  }

  return {onSubmit, setData, fileRequest, errors, data }
}