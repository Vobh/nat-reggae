// import {_Product} from '@/types/type'
import Image from 'next/image'
import AddToCart from '../cart/add-to-cart'
import { ProductType } from '@/app/shop/page'
import { useRouter } from "next/navigation";

type Props = {
    product: ProductType;
}

export default function ProductCard({product}: Props) {
    const router = useRouter();
    return (
        <div className='rounded'>
            <a key={product.id} onClick={() => router.push(`/shops/${product.id}`)} className="group">
                <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                        src={product.image_url}
                        alt={product.imageAlt}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                </div>
            </a>
            <div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(product.price / 100)}</p>
                <AddToCart product={product}/> 
            </div>           
        </div>
    )
}