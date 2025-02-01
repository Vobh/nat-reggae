'use client';

import Modal from "./modal";
import { useState } from "react";
import useLogin from "@/app/hooks/useLogin";
import CustomButton from "../forms/CustomButton";

const Login = () => {
    const login = useLogin()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-purple-700 text-white font-semibold rounded-xl opacity-80">
                    ERROR
                </div>
                <CustomButton
                    label="👤 Submit"
                    onClick={() => console.log("Será o Tiranah?")}
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