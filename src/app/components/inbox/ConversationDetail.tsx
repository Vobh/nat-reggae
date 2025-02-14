"use client";

import React, { useEffect } from "react";
import CustomButton from "../forms/CustomButton";
import { ConversationType } from "@/app/inbox/page";
import useWebSocket, { ReadyState } from "react-use-websocket";

interface ConversationDetailProps {    
    token: string;
    userId: string;
    conversation: ConversationType;
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
    userId,
    token, // 10:11:17
    conversation
}) => {
    const myUser = conversation.users?.find((user) => user.id == userId)
    const otherUser = conversation.users?.find((user) => user.id != userId)

    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(`ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`, {
        share: false,
        shouldReconnect: () => true,
        },
    )

    useEffect(() => {
        console.log("Connection state changed", readyState);
    }, [readyState])

    return (
        <>
            <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
                <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
                    <p className="font-bold text-gray-500">
                        John Doe
                    </p>

                    <p>laksdjf sd sdlskfj sldkfj sldkfj lsdkfj dd</p>
                </div>

                <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
                    <p className="font-bold text-gray-500">
                        Mary Doe
                    </p>

                    <p>laksdjf sd sdlskfj sldkfj sldkfj lsdkfj dd</p>
                </div>
            </div>

            <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full p-2 bg-gray-200 rounded-xl"
                />

                <CustomButton 
                    label='Send'
                    onClick={() => console.log('PUT4 M3RD4 ⭐')}
                    className="w-[100px] py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />
            </div>
        </>
    )
}

export default ConversationDetail;