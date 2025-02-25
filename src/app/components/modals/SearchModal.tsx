'use client';

import Modal from "./modal";
import useSearchModal from "@/app/hooks/useSearchModal";
import DatePicker from "../forms/Calendar";
import { Range } from "react-date-range";
import SelectCountry, {SelectCountryValue} from "../forms/SelectCountry";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
}

const SearchModal = () => {
    let content = (<></>);
    const searchModal = useSearchModal();
    const [country, SetCountry] = useState<SelectCountryValue>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    //
    // set date range

    const _setDateRange = (selection: Range) => {
        if (searchModal.step === 'checkin') {
            searchModal.open('checkout')
        } else if (searchModal.step === 'checkout') {
            searchModal.open('details');
        }

        setDateRange(selection);
    }

    //
    // Contents 11:11:46

    const contentLocation = (
        <>
            <h2 className="mb-6 text-2xl">Local name</h2>

            <SelectCountry 
                value={country}
                onChange={(value) => SetCountry(value as SelectCountryValue)}
            />

            <div className="mt-6 flex flex-row gap-4">
                <CustomButton 
                    label="Check in date ->"
                    onClick={() => searchModal.open('checkin')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />
            </div>
        </>
    )

    const contentCheckin = (
        <>
            <h2 className="mb-6 text-2xl">Day choosed</h2>

            <DatePicker 
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">

                <CustomButton 
                    label="<- Location"
                    onClick={() => searchModal.open('location')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />

                <CustomButton 
                    label="Check out date ->"
                    onClick={() => searchModal.open('checkout')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    }

    return (
        <Modal             
            label="Search"
            content={content}
            close={searchModal.close}
            isOpen={searchModal.isOpen}
        />
    )
}

export default SearchModal;