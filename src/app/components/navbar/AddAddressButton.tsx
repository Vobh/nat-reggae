'use client';

import useLogin from "@/app/hooks/useLogin";
import useAddAddress from "@/app/hooks/useAddAddress";
import React from "react";
import MenuLink from "./MenuLink";

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
        <MenuLink 
            label="📤 Meu endereço"
            onClick={yourAddress}
        />
    )
}

export default AddAddressButton;