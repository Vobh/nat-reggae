'use client';

import useLogin from "@/app/hooks/useLogin";
import useAddAddress from "@/app/hooks/useAddAddress";
import React from "react";

interface AddAddressButtonProps {
    userId?: string | null;
}

const AddAddressButton: React.FC<AddAddressButtonProps> = ({
    userId
}) => {
    const login = useLogin();
    const addAddress = useAddAddress();

    const yourAddress = () => {
        if (userId) {
            addAddress.open()
        } else {
            login.open();
        }
    }
    return (
        <div 
            onClick={yourAddress}
            className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-gray-200"
        >
            Add address
        </div>
    )
}

export default AddAddressButton;