import Image from "next/image";

const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-sm">All</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-sm">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-sm">villas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-sm">Tiny Homes</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={30}
                    height={30}
                />
                <span className="text-sm">Cabin</span>
            </div>
        </div>
    )
}

export default Categories;