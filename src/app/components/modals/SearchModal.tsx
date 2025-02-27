'use client';

import Modal from "./modal";
import useSearchModal, { SearchQuery } from "@/app/hooks/useSearchModal";
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
    const [numDays, setNumDays] = useState<string>('1');
    const [country, SetCountry] = useState<SelectCountryValue>();
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    //
    //

    const closeAndSearch = () => {
        const newSearchQuery: SearchQuery = {
            country: country?.label,
            checkIn: dateRange.startDate,
            checkOut: dateRange.endDate,
            days: parseInt(numDays),
            category: ''
        }

        searchModal.setQuery(newSearchQuery);
        searchModal.close(); // 11:19:23
    }

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
    // Contents

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

    const contentCheckout = (
        <>
            <h2 className="mb-6 text-2xl">Last day</h2>

            <DatePicker 
                value={dateRange}
                onChange={(value) => _setDateRange(value.selection)}
            />

            <div className="mt-6 flex flex-row gap-4">

                <CustomButton 
                    label="<- Check in date"
                    onClick={() => searchModal.open('checkin')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />

                <CustomButton 
                    label="Details ->"
                    onClick={() => searchModal.open('details')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />
            </div>
        </>
    )

    const contentDetails = (
        <>
            <h2 className="mb-6 text-2xl">Dias de show</h2>

            <div className="space-y-4">
                <div className="space-y-4">
                    <label>Number of days:</label>
                    <input 
                        type="number" 
                        min="1" 
                        value={numDays} 
                        onChange={(e) => setNumDays(e.target.value)}
                        className="w-full h-14 px-4 border border-gray-300 rounded-xl"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-row gap-4">

                <CustomButton 
                    label="<- Check out date"
                    onClick={() => searchModal.open('checkout')}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />

                <CustomButton 
                    label="✔ Search"
                    onClick={closeAndSearch}
                    className="w-full py-4 bg-natureggae hover:bg-natureggae-dark text-white text-center rounded-xl transition cursor-pointer"
                />
            </div>
        </>
    )

    if (searchModal.step == 'location') {
        content = contentLocation;
    } else if (searchModal.step == 'checkin') {
        content = contentCheckin;
    } else if (searchModal.step == 'checkout') {
        content = contentCheckout;
    } else if (searchModal.step == 'details') {
        content = contentDetails;
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