import React from "react";
import { CartArea, CartHeader, CartBody,CartIcon,CartText } from './styled';

export default () => {
    return (
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/cart.png"/>
                <CartText>Meu carrinho (x) </CartText>

            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>

    )
}