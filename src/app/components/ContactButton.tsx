'use client';

import useLogin from "../hooks/useLogin";
import { useRouter } from "next/navigation";
import apiService from "../services/apiService";
import React from "react";

interface ContactButtonProps {
    userId: string | null;
    vendorId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
    userId, 
    vendorId
}) => {
    const login = useLogin();
    const router = useRouter();

    const startConversation = async () => {
        if (userId) {
            const conversation = await apiService.get(`/api/chat/start/${vendorId}/`)

            if (conversation.conversation_id) {
                router.push(`/inbox/${conversation.conversation_id}`)
            }
        } else {
            login.open();
        }
    }

    return (
        <div 
            onClick={startConversation}
            className="mt-6 py-4 px-6 bg-natureggae hover:bg-natureggae-dark transition text-white rounded-xl cursor-pointer"
        >
            Contact
        </div>
    )
}

export default ContactButton;