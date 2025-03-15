'use client';

import ProductCard from '../productCard';
import { useEffect, useState } from 'react';

export type ProductType = {
    id: string;
    name: string;
    price: number;
    image_url: string;
    imageAlt: string;
}

const ShopList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
        
    const getProducts = async () => {
        const url = 'http://localhost:8000/api/shops/';

        await fetch(url, {
            method: 'GET',
        })
        .then(response => response.json())
        .then((json) => {
            console.log('json', json);

            setProducts(json.data)
        })
        .catch((error) => {
            console.log('error', error);
        });
    };

    useEffect(() => { // 4:49:12
        getProducts();
    }, []);
    
    return (
        <section className="max-w-[1500px] mx-auto px-6 pb-6">
            <h2 className="my-6 mb-6 text-2xl">Products</h2>
            
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product: ProductType) => {
                    return (
                        <ProductCard 
                            key={product.id} 
                            product={product}
                        />
                    )
                })}
            </div>
        </section>
    )
    
}

export default ShopList;