'use client';

import apiService from "@/app/services/apiService";
import { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem"

export type ProductType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const getProducts = async () => {
        const tmpProducts = await apiService.get('/api/products/');

        setProducts(tmpProducts.data);
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
                    />
                )
            })}
        </>
    )
}

export default ProductList;