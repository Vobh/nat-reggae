import Image from "next/image";
import VideoPage from "@/app/components/video";

const ProductDetailPage = () => {
        
    return (
        <main className="max-w[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">This is the the name</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        Número de dias: 4 dias 
                    </span>

                    <hr />

                    <p className="mt-6 text-lg">
                        This is the description
                    </p>
                </div>

                <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
                    <h2 className="mb-5 text-2xl">
                        Video da banda
                    </h2>
                    <VideoPage />
                    <div className="mb-4 flex justify-between align-center">
                        <p>Curtir video da banda</p>                
                    </div>
                </aside>
            </div>
        </main>        
    ) 
}

export default ProductDetailPage;