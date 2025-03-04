'use client';

import useLogin from "@/app/hooks/useLogin";
import useAddProduct from "@/app/hooks/useAddProduct";
import React from "react";

interface AddProductButtonProps {
    userId?: string | null;
}

const AddProductButton: React.FC<AddProductButtonProps> = ({
    userId
}) => {
    const login = useLogin();
    const addProduct = useAddProduct();

    const yourHome = () => {
        if (userId) {
            addProduct.open()
        } else {
            login.open();
        }
    }
    return (
        <div 
            onClick={yourHome}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Seu show aqui!
        </div>
    )
}

export default AddProductButton;