'use client';

import Modal from "./modal";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useSignup from "@/app/hooks/useSignup";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handleLogin } from "@/app/lib/actions";

const Signup = () => {

    //
    // Variables 

    const router = useRouter();
    const signup = useSignup();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);

    //
    // Submit functionality

    const submitSignup = async () => {
        const formData = {
            name: "Vigo",
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', JSON.stringify(formData));

        if (response.access) {
            handleLogin(response.user.pk, response.access, response.refresh);
            signup.close();

            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) => {
                return error;
            })

            setErrors(tmpErrors);
        }
    }

    const content = (
        <>
            <form
                action={submitSignup} 
                className="space-y-4"
            >
                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

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
                    label="👤 Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    return (
        <Modal 
            isOpen={signup.isOpen}
            close={signup.close}
            label="Sign up"
            content={content}
        />
    )
}

export default Signup;