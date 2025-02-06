'use client';

import { useState } from "react";
import Image from "next/image";
import Modal from "./modal";

import useAddProduct from "@/app/hooks/useAddProduct";
import CustomButton from "../forms/CustomButton";

const AddProduct = () => { // 6:08:41
    const [currentStep, setCurrentStep] = useState(1);

    const addProduct = useAddProduct();

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Choose category</h2>
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : (
                <p>step 2</p>
            )}
        </>
    )

    return (
        <>
            <Modal
                isOpen={addProduct.isOpen}
                close={addProduct.close}
                label="Add Product"
                content={content}
            />
        </>
    )
}

export default AddProduct;