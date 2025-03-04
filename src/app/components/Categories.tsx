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
                    src="/World.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">All</span>
            </div>

            <div 
                onClick={() => _setCategory('axe')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'axe' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Axe.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Axé</span>
            </div>

            <div 
                onClick={() => _setCategory('forro')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'forro' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Forro.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Forró</span>
            </div>

            <div 
                onClick={() => _setCategory('vaqueijada')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'vaqueijada' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Vaqueijada.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Vaqueijada</span>
            </div>

            <div 
                onClick={() => _setCategory('seresta')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'seresta' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Seresta.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Seresta</span>
            </div>

            <div 
                onClick={() => _setCategory('soul')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'soul' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Soul.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Soul</span>
            </div>

            <div 
                onClick={() => _setCategory('reggae')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'reggae' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Reggae.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Reggae</span>
            </div>

            <div 
                onClick={() => _setCategory('lambada')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'lambada' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Lambada.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Lambada</span>
            </div>

            <div 
                onClick={() => _setCategory('pisadinha')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'pisadinha' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Pisadinha.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Pisadinha</span>
            </div>

            <div 
                onClick={() => _setCategory('brega')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'brega' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Brega.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Bregão</span>
            </div>

            <div 
                onClick={() => _setCategory('mpb')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'mpb' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Mpb.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">MPB</span>
            </div>

            <div 
                onClick={() => _setCategory('jovemguarda')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'jovemguarda' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/JovemGuarda.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">JovemGuarda</span>
            </div>

            <div
                onClick={() => _setCategory('sertanejo')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'sertanejo' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Sertanejo.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Sertanejo</span>
            </div>

            <div
                onClick={() => _setCategory('rock')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'rock' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Rock.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Rock</span>
            </div>

            <div
                onClick={() => _setCategory('samba')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'samba' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Samba.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Samba</span>
            </div>

            <div 
                onClick={() => _setCategory('funk')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'funk' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Funk.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Funk</span>
            </div>

            <div
                onClick={() => _setCategory('gospel')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'gospel' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                <Image 
                    src="/Gospel.png"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-xs">Gospel</span>
            </div>
        </div>
    )
}

export default Categories;