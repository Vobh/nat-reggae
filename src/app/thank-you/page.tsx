'use client';

import { useRouter } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { Heading } from "../components/heading";
import CustomButton from "../components/forms/CustomButton";

const TankYouPage = () => {
    const { clearCart } = useShoppingCart();
    const router = useRouter();
    return (
        <div className="relative py-24 sm:py-32 bg-brand-25">
            <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                <div>
                    <Heading>
                    <span>Muito obrigado por sua compra</span>
                    <br />
                    <span className="relative bg-gradient-to-r
                    from-brand-700 to-brand-800 text-transparent
                    bg-clip-text">Para concluir, por favor clique no botão abaixo</span>
                    </Heading>                    
                </div>
            </div>
            <div className="relative py-24 sm:py-32 bg-brand-25">
                <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                    <div className="w-full max-w-80">
                        <CustomButton 
                            label='Concluir processamento'
                            className='relative z-10 h-14 w-full py-4 mb-2 bg-black hover:bg-gray-800 text-white text-center rounded-xl transition cursor-pointer'
                            onClick={() => {
                                clearCart();
                                router.push('/shows')
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default TankYouPage; // className="relative z-10 h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">