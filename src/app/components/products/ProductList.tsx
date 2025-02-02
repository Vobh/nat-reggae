'use client';

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
        const url = 'http://localhost:8000/api/products/';

        await fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then((json) => {
                console.log('json', json)

                setProducts(json.data)
            })
            .catch((error) => {
                console.log('error', error);
            });
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