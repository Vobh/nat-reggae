import ContactButton from "@/app/components/ContactButton";
import ProductList from "@/app/components/products/ProductList";
import { getUserId } from "@/app/lib/actions";
import apiService from "@/app/services/apiService";
import Image from "next/image";

const VendorDetailPage = async ({ params }: {params: { id: string }}) => {
    const vendor = await apiService.get(`/api/auth/${params.id}`)
    const userId = await getUserId();
    // 8:34:58
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="mt-4 flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image 
                            src={vendor.avatar_url}
                            width={200}
                            height={200}
                            alt="Vendor name"
                            className="rounded-full"
                        />

                        <h1 className="mt-6 text-2xl">{vendor.name}</h1>
                        
                        {userId != params.id && (
                            <ContactButton />
                        )}
                    </div>
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ProductList 
                            vendor_id={params.id}
                        /> 
                    </div>
                </div>
            </div>
        </main>
    )
}

export default VendorDetailPage;