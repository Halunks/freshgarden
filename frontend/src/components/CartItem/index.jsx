import React, {Fragment} from "react";
import defaultImage from "../../assets/demo/eggplant.jpg";
import {
    Count,
    Decrement, Delete,
    DetailContainer,
    Image,
    ImageContainer, Increment,
    LeftContainer, Price,
    ProductContainer,
    ProductName, QuantityContainer, RightContainer
} from "../../style/ShoppingCart";
import kopfsalat from '../../assets/demo/salad.png'
import {unmountComponentAtNode} from "react-dom";

const CartItem = ({item}) => {
    const priceSuffix = item.price % 1 ? '0' : '';
    const stock = item.quantity

    return(
        <Fragment>
            <ProductContainer>
                    <LeftContainer>
                        <ImageContainer>
                            <Image src={item.image} />
                        </ImageContainer>
                        <DetailContainer>
                            <ProductName>{item.name}</ProductName>
                            <QuantityContainer>
                                <Decrement onClick={() => {
                                    if (item.quantity > 1) {
                                        item.quantity = item.quantity - 1
                                    }
                                }}><i className="fas fa-minus"/></Decrement>
                                <Count>{item.quantity}</Count>
                                <Increment onClick={() => {
                                    if (item.quantity < stock ) {
                                        item.quantity = item.quantity + 1
                                    }
                                }}><i className="fas fa-plus"/></Increment>
                            </QuantityContainer>
                        </DetailContainer>
                    </LeftContainer>

                    <RightContainer>
                        <Delete onClick={() => unmountComponentAtNode(document.getElementById(`cart-item-${item.id}`))}><i className="fas fa-trash-alt"/></Delete>
                        <Price>CHF {item.price * item.quantity + priceSuffix}</Price>
                    </RightContainer>
                </ProductContainer>
        </Fragment>
    )
}

export default CartItem