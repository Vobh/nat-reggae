'use client';

import { useState } from "react";
import useSearchModal, {SearchQuery} from "../hooks/useSearchModal";

import Image from "next/image";

const Categories = () => {
    const searchModal = useSearchModal();
    const [category, setCategory] = useState('');

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            days: searchModal.query.days,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className="overflow-x-auto pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div 
                onClick={() => _setCategory('')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">All</span>
            </div>

            <div 
                onClick={() => _setCategory('beach')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'beach' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Beach</span>
            </div>

            <div 
                onClick={() => _setCategory('villas')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'villas' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Villas</span>
            </div>

            <div 
                onClick={() => _setCategory('cabin')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabins' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Cabins</span>
            </div>

            <div
                onClick={() => _setCategory('tiny_homes')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'tiny_homes' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Tiny homes</span>
            </div>
        </div>
    )
}

export default Categories;