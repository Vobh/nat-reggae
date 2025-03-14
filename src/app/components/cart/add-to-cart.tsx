'use client';

import {useState, useTransition} from "react";
// import {_Product} from "@/types/type";
import { ProductType } from "../product-shops/ShopList";
import {useShoppingCart} from "use-shopping-cart";

type Props = {
    product: ProductType
}

enum Action {
    Increment,
    Decrement
}

export default function AddToCart({product}: Props) {
    const [isPending, startTransition] = useTransition();
    const [quantity, setQuantity] = useState(1);
    const {addItem} = useShoppingCart();

    const handleQuantity = (action: Action) => {
        switch (action) {
            case Action.Increment:
                if (quantity >= 10) return;
                setQuantity(quantity + 1)
                break;
            case Action.Decrement:
                if (quantity <= 1) return;
                setQuantity(quantity - 1)
                break;
        }
    }

    return (
        <>
            <div
                className="w-full flex flex-row justify-center border rounded-lg">
                <button
                    data-action="decrement"
                    className={
                        ' h-full w-20 cursor-pointer outline-none py-3'
                    }
                    onClick={() => handleQuantity(Action.Decrement)}
                    aria-label={`Add one ${product.name} to your cart`}
                >
                    <span className="m-auto text-base">−</span>
                </button>
                <input
                    type="number"
                    className="text-center w-full text-base hover md:text-basecursor-default flex items-center outline-none bg-transparent"
                    name="custom-input-number"
                    readOnly
                    value={quantity}
                ></input>
                <button
                    data-action="increment"
                    className="h-full w-20 cursor-pointer py-3"
                    onClick={() => handleQuantity(Action.Increment)}
                    aria-label={`Add one ${product.name} to your cart`}
                >
                    <span className="m-auto text-base">+</span>
                </button>
            </div>
            <button 
                aria-label="Add item to cart" title="Add Item to Cart" disabled={isPending}
                className='w-full border mt-4 py-2 px-8 rounded-lg hover:bg-black hover:text-white'
                onClick={() => addItem(product, {count: quantity})}
                >
                    <span>Adicionar ao carrinho</span>
                </button>
    </>
    )
}