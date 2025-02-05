'use client';

import Modal from "./modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useLogin from "@/app/hooks/useLogin";
import CustomButton from "../forms/CustomButton";
import { handleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";

const Login = () => {
    const router = useRouter()
    const login = useLogin()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password
        }

        const response = await apiService.post('/api/auth/login/', JSON.stringify(formData))

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);
            login.close();

            router.push('/')
        } else {
            setErrors(response.non_field_errors);
        }
    }

    const content = (
        <>
            <form 
                action={submitLogin}
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                {errors.map((error, index) => {
                    return (
                        <div 
                            key={`error_${index}`}
                            className="p-5 bg-purple-700 text-white font-semibold rounded-xl opacity-80"
                        >
                            {error}
                        </div>
                    )
                })}

                <CustomButton
                    label="📥 Submit"
                    onClick={submitLogin}
                />
            </form>
        </>
    )
    return (
        <Modal 
            isOpen={login.isOpen}
            close={login.close}
            label="Log in"
            content={content}
        />
    )
}

export default Login;