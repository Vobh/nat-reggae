import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory, // 11:48:42
    setCategory      
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div 
                    onClick={() => setCategory('beach')}
                    className={`pb-4 flex flex-col font-bold items-center space-y-2 border-b-2 ${dataCategory == 'beach' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image 
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-sm">Beach</span>
                </div>
    
                <div 
                    onClick={() => setCategory('villas')}
                    className={`pb-4 flex flex-col font-bold items-center space-y-2 border-b-2 ${dataCategory == 'villas' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image 
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-sm">Villas</span>
                </div>
    
                <div 
                    onClick={() => setCategory('cabin')}
                    className={`pb-4 flex flex-col font-bold items-center space-y-2 border-b-2 ${dataCategory == 'cabin' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image 
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-sm">Cabin</span>
                </div>
    
                <div 
                    onClick={() => setCategory('tiny_homes')}
                    className={`pb-4 flex flex-col font-bold items-center space-y-2 border-b-2 ${dataCategory == 'tiny_homes' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                    <Image 
                        src="/icn_category_beach.jpeg"
                        alt="Category - Beach"
                        width={30}
                        height={30}
                    />
                    <span className="text-sm">Tiny homes</span>
                </div>
            </div>
        </>
    )
}

export default Categories;