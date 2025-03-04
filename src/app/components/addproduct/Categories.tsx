import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory      
}) => {
    return (
        <>
            <div className="overflow-x-auto pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div 
                    onClick={() => setCategory('')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/World.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">All</span>
                </div>
    
                <div 
                    onClick={() => setCategory('axe')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'axe' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Axe.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Axé</span>
                </div>
    
                <div 
                    onClick={() => setCategory('forro')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'forro' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Forro.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Forró</span>
                </div>
    
                <div 
                    onClick={() => setCategory('vaqueijada')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'vaqueijada' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Vaqueijada.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Vaqueijada</span>
                </div>
    
                <div 
                    onClick={() => setCategory('seresta')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'seresta' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Seresta.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Seresta</span>
                </div>
    
                <div 
                    onClick={() => setCategory('soul')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'soul' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Soul.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Soul</span>
                </div>
    
                <div 
                    onClick={() => setCategory('reggae')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'reggae' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Reggae.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Reggae</span>
                </div>
    
                <div 
                    onClick={() => setCategory('lambada')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'lambada' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Lambada.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Lambada</span>
                </div>
    
                <div 
                    onClick={() => setCategory('pisadinha')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'pisadinha' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Pisadinha.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Pisadinha</span>
                </div>
    
                <div 
                    onClick={() => setCategory('brega')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'brega' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Brega.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Bregão</span>
                </div>
    
                <div 
                    onClick={() => setCategory('mpb')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'mpb' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Mpb.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">MPB</span>
                </div>
    
                <div 
                    onClick={() => setCategory('jovemguarda')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'jovemguarda' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/JovemGuarda.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">JovemGuarda</span>
                </div>
    
                <div
                    onClick={() => setCategory('sertanejo')} 
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'sertanejo' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Sertanejo.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Sertanejo</span>
                </div>
    
                <div
                    onClick={() => setCategory('rock')} 
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'rock' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Rock.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Rock</span>
                </div>
    
                <div
                    onClick={() => setCategory('samba')} 
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'samba' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Samba.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Samba</span>
                </div>
    
                <div 
                    onClick={() => setCategory('funk')}
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'funk' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Funk.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Funk</span>
                </div>
    
                <div
                    onClick={() => setCategory('gospel')} 
                    className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'gospel' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                    <Image 
                        src="/Gospel.png"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-xs">Gospel</span>
                </div>
            </div>
        </>
    )
}

export default Categories;