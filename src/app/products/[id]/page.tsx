import Image from "next/image";
import ReservationSidebar from "@/app/components/products/ReservationSidebar";
import apiService from "@/app/services/apiService";

const ProductDetailPage = async ({params}: { params: {id: string} }) => {
    const product = await apiService.get(`/api/products/${params.id}`)

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
                    <h1 className="mb-4 text-4xl">{product.title}</h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        Número de dias: {product.days} 
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        {product.vendor.avatar_url && (
                            <Image 
                                src={product.vendor.avatar_url}
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                        )}

                        <p><strong>{product.vendor.name}</strong> is your host</p>
                    </div>

                    <hr />

                    <p className="mt-6 text-lg">
                        {product.description}
                    </p>
                </div>

                <ReservationSidebar 
                    product={product}
                />
            </div>
        </main>
    )   
}

export default ProductDetailPage;