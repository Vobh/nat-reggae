'use client';

import Modal from "./modal";
import { useState } from "react";
import useSignup from "@/app/hooks/useSignup";
import CustomButton from "../forms/CustomButton";

const Signup = () => {
    const signup = useSignup()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Email" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />
                
                <input placeholder="Password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

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
            isOpen={signup.isOpen}
            close={signup.close}
            label="Signup"
            content={content}
        />
    )
}

export default Signup;