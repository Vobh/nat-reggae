import Image from "next/image";
import { ProductType } from "./ProductList";
import React from "react";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

interface ProductProps {
    product: ProductType,
    markFavorite?: (is_favorite: boolean) => void;
}

const ProductListItem: React.FC<ProductProps> = ({
    product,
    markFavorite
}) => {
    const router = useRouter();

    return (
        <div 
            className="cursor-point"
            onClick={() => router.push(`/products/${product.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image 
                    fill
                    src={product.image_url}
                    sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Beach house"
                />

                {markFavorite && (
                    <FavoriteButton 
                        id={product.id}
                        is_favorite={product.is_favorite}
                        markFavorite={(is_favorite) => markFavorite(is_favorite)}
                    />
                )}
            </div>

            <div className="mt-2">
                <p className="text-lg font-bold">{product.title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>${product.price_per_night}</strong> per night</p>
            </div>
        </div>
    )
}

export default ProductListItem;