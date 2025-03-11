'use client';

import { useState } from "react";
import Modal from "./modal";
import CustomButton from "../forms/CustomButton";

import useAddAddress from "@/app/hooks/useAddAddress";

import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddAddress = () => {
    //
    // States

    const [currentStep, setCurrentStep] = useState(1);
    const [errors, setErrors] = useState<string[]>([]);
    const [dataName, setDataName] = useState('');
    const [dataCity, setDataCity] = useState('');
    const [dataStreet, setDataStreet] = useState('');
    const [dataNumber, setDataNumber] = useState('');
    const [dataCep, setDataCep] = useState('');
    const [dataState, setDataState] = useState('');
    
    //
    //

    const AddAddress = useAddAddress();
    const router = useRouter()

    //
    // Set datas
    // Submit

    const submitForm = async () => {
        console.log('submitForm');

        if (
            dataName &&
            dataCity &&
            dataStreet &&
            dataNumber &&
            dataCep &&
            dataState
        ) {
            const formData = new FormData();
            formData.append('name', dataName);
            formData.append('city', dataCity);
            formData.append('street', dataStreet);
            formData.append('number', dataNumber);
            formData.append('cep', dataCep);
            formData.append('state', dataState);

            const response = await apiService.post('/api/shops/sale/', formData);

            if (response.success) {
                console.log('Success :-)');

                router.push('/thank-you/?added=true');

                AddAddress.close();
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
                    <h2 className="mb-6 text-2xl">Entrada de dados para entrega</h2>

                    <div className="pt-3 pb-6 space-y-4">                        
                        <div className="flex flex-col space-y-2">
                            <label>Digite o nome completo</label>
                            <input
                                type="text"
                                value={dataName}
                                onChange={(e) => setDataName(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Qual a cidade que você mora?</label>
                            <input
                                type="text"
                                value={dataCity}
                                onChange={(e) => setDataCity(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            ></input>
                        </div>
                    </div>

                    <CustomButton 
                        label="Next"
                        onClick={() => setCurrentStep(2)}
                        className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                    />
                </>
            ) : currentStep == 2 ? (
                <>
                    <h2 className="mb-6 text-2xl">Dados de localização</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Nome da rua ou avenida e bairro</label>
                            <input
                                type="text"
                                value={dataStreet}
                                onChange={(e) => setDataStreet(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Numero da casa ou apto</label>
                            <input
                                type="text"
                                value={dataNumber}
                                onChange={(e) => setDataNumber(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            ></input>
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
            ) : (
                <>
                    <h2 className="mb-6 text-2xl">Outros dados</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Digite o CEP da sua cidade</label>
                            <input
                                type="text"
                                value={dataCep}
                                onChange={(e) => setDataCep(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label>Estado</label>
                            <input
                                type="text"
                                value={dataState}
                                onChange={(e) => setDataState(e.target.value)}
                                className="w-full p-4 border border-gray-600 rounded-xl"
                            />
                        </div>
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
                        onClick={() => setCurrentStep(2)}
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
                isOpen={AddAddress.isOpen}
                close={AddAddress.close}
                label="Dados do cliente"
                content={content}
            />
        </>
    )
}

export default AddAddress;