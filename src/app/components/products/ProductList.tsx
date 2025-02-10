'use client';

import apiService from "@/app/services/apiService";
import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem"

export type ProductType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
}

interface ProductListProps {
    vendor_id?: string | null;
}

const ProductList: React.FC<ProductListProps> = ({
    vendor_id
}) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const getProducts = async () => {
        let url = '/api/products/';

        if (vendor_id) {
            url += `?vendor_id=${vendor_id}`
        }
        const tmpProducts = await apiService.get(url);

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