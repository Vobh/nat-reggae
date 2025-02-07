'use client';

import Image from "next/image";

import { ChangeEvent, useState } from "react";
import Modal from "./modal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproduct/Categories";

import useAddProduct from "@/app/hooks/useAddProduct";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddProduct = () => {
    //
    // States

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataDays, setDataDays] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);

    //
    //

    const addProduct = useAddProduct();
    const router = useRouter()

    //
    // Set datas

    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
    }

    //
    // Submit

    const submitForm = async () => {
        console.log('submitForm');

        if (
            dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataDays &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData();
            formData.append('category', dataCategory);
            formData.append('title', dataTitle);
            formData.append('description', dataDescription);
            formData.append('price_per_night', dataPrice);
            formData.append('days', dataDays);
            formData.append('country', dataCountry.label);
            formData.append('country_code', dataCountry.value);
            formData.append('image', dataImage);

            const response = await apiService.post('/api/products/create/', formData);

            if (response.success) {
                console.log('Success :-)');

                router.push('/');

                addProduct.close();
            } else {
                console.log('Error');

                const tmpErrors: string[] = Object.values(response).map((error: any) => {
                    return error;
                })

                setErrors(tmpErrors)
            }
        }
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
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
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
                        className='w-full py-4 mb-2 bg-black hover:bg-gray-800 text-white text-center rounded-xl transition cursor-pointer'
                        onClick={() => setCurrentStep(1)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(3)}
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
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
                        className='w-full py-4 mb-2 bg-black hover:bg-gray-800 text-white text-center rounded-xl transition cursor-pointer'
                        onClick={() => setCurrentStep(2)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(4)}
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
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
                        className='w-full py-4 mb-2 bg-black hover:bg-gray-800 text-white text-center rounded-xl transition cursor-pointer'
                        onClick={() => setCurrentStep(3)}
                    />
                    
                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(5)}
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                    />
                </>
            ) : (
                <>
                    <h2 className="mb-6 text-2xl">Image</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={setImage}
                            />
                        </div>

                        {dataImage && (
                            <div className="w-[200px] h-[150px] relative">
                                <Image 
                                    fill
                                    alt="Uploaded image"
                                    src={URL.createObjectURL(dataImage)}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        )}
                    </div>

                    {errors.map((error, index) =>{
                        return (
                            <div
                                key={index}
                                className="p-5 mb-4 bg-natureggae text-white rounded-xl opacity-80"
                            >
                                {error}
                            </div> 
                        )
                    })}

                    <CustomButton 
                        label="Previous"
                        className='w-full py-4 mb-2 bg-black hover:bg-gray-800 text-white text-center rounded-xl transition cursor-pointer'
                        onClick={() => setCurrentStep(4)}
                    />
                    
                    <CustomButton 
                        label="Submit"
                        onClick={submitForm}
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
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