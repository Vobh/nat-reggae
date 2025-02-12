'use client';

import apiService from "@/app/services/apiService";
import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem"

// 9:03:53

export type ProductType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
    is_favorite: boolean;
}

interface ProductListProps {
    vendor_id?: string | null;
    favorites?: boolean | null;
}

const ProductList: React.FC<ProductListProps> = ({
    vendor_id,
    favorites
}) => {
    const [products, setProducts] = useState<ProductType[]>([]);

    const markFavorite = (id: string, is_favorite: boolean) => {
        const tmpProducts = products.map((product: ProductType) => {
            if (product.id == id) {
                product.is_favorite = is_favorite

                if (is_favorite) {
                    console.log('added to list of favorited products')
                } else {
                    console.log('removed from list')
                }
            }

            return product;
        })

        setProducts(tmpProducts);
    }

    const getProducts = async () => {
        let url = '/api/products/';

        if (vendor_id) {
            url += `?vendor_id=${vendor_id}`
        } else if (favorites) {
            url  += '?is_favorites=true'
        }
        const tmpProducts = await apiService.get(url);

        setProducts(tmpProducts.data.map((product: ProductType) => {
            if (tmpProducts.favorites.includes(product.id)) {
                product.is_favorite = true
            } else {
                product.is_favorite = false
            }
            return product
        }));
    };

    useEffect(() => {
        getProducts();
    }, []);
    
    return (
        <>
            {products.map((product) => {
                return (
                    <ProductListItem 
                        key={product.id}
                        product={product}
                        markFavorite={(is_favorite: any) => markFavorite(product.id, is_favorite)}
                    />
                )
            })}
        </>
    )
}

export default ProductList;