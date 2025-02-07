'use client';

import Image from "next/image";

import { useState } from "react";
import Modal from "./modal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproduct/Categories";

import useAddProduct from "@/app/hooks/useAddProduct";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

const AddProduct = () => {
    //
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataDays, setDataDays] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();

    //
    //

    const addProduct = useAddProduct();

    //
    // Set datas

    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    //
    //

    const content = (
        <>
            {currentStep == 1 ? (
                <>
                    <h2 className="mb-6 text-2xl">Choose category</h2>
                    <div className="w-full p-4 mb-4 bg-purple-100 hover:bg-white border border-gray-600 rounded-xl">
                        <Categories 
                            dataCategory={dataCategory}
                            setCategory={(category) => setCategory(category)}
                        />
                    </div>

                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Describe your show</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Title</label>
                            <input
                                type="text"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Description</label>
                            <textarea
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                            ></textarea>
                        </div>
                    </div>

                    <CustomButton 
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(1)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(3)}
                    />
                </>
            ) : currentStep == 3 ? (
                <>
                    <h2 className="mb-6 text-2xl">Details</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Price per nigth</label>
                            <input
                                type="number"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Days</label>
                            <input
                                type="number"
                                value={dataDays}
                                onChange={(e) => setDataDays(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
                    </div>

                    <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep(2)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(4)}
                    />
                </>
            ) : currentStep == 4 ? (
                <>
                    <h2 className="mb-6 text-2xl">Location</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <SelectCountry
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>
                    
                    <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => setCurrentStep(3)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            ) : (
                <>
                    <h2 className="mb-6 text-2xl">Image</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <>6:46:06</>
                    </div>

                    <CustomButton 
                        label="Previous"
                        className="mb-2 bg-black hover:bg-gray-800"
                        onClick={() => console.log('Submit')}
                    />
                    
                    <CustomButton 
                        label="Submit"
                        onClick={() => setCurrentStep(5)}
                    />
                </>
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