import AuthLayout from "@/Layouts/AuthLayout";
import Input from "@/Components/Input";
import SolidButton from "@/Components/SolidButton";
import useUser from "@/Hooks/useUser";
import ErrorMessage from "@/Components/ErrorMessage";


export default function Login() {

    const {errors, setData, onSubmit} = useUser({
        "name": "",
        "password": ""
    })


    return (
        <AuthLayout onSubmit={(e) => onSubmit(e, "/admin/login")}>

            <div className="my-5">
                <label htmlFor="name">Name</label>
                <Input 
                InputType="text"
                InputPlaceholder="John"
                InputId="name"
                InputOnChange={(e) => setData("name", e.target.value)}/>

                {errors.name && <ErrorMessage message={errors.name}/>}
            </div>
            

            <div className="mt-6 mb-13">
                <label htmlFor="password">Password</label>
                <Input
                InputType="text"
                InputId="password"
                InputOnChange={(e) => setData("password", e.target.value)}/>
                
                {errors.password && <ErrorMessage message={errors.password}/>}
            </div>
            
            <SolidButton ButtonType="submit" ButtonText="Log-in"/>

        </AuthLayout>
    )
}