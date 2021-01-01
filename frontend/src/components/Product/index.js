import React, {Fragment} from 'react'
import {ProductContainer, InfoConatiner, ProductImg, Seller, AvailibleStock, Price, Info, ProductTitle,
       Quantity, PriceContainer, Unit, StockDiv, Wrap, WrapPrice, Increment, Decrement, Count, Delete} from '../../style/Product.js'
import TomatoImage from '../../assets/images/tomato.jpg';
import {useHistory} from "react-router-dom";



const Product = () => {

    // const history = useHistory();
    //
    // const handleClick = () => {
    //     history.push('/order')
    // }
    return (
        <Fragment>
            <ProductContainer>
            <ProductImg src={TomatoImage} />
                <InfoConatiner>
                    <Info>
                        <Delete><i class="fas fa-trash-alt"></i></Delete>

                        <ProductTitle>Tomato</ProductTitle>
                        <Seller>Seller</Seller>

                        <Wrap>
                            <StockDiv>
                                <AvailibleStock>00</AvailibleStock>
                            </StockDiv>
                            <WrapPrice>
                            <Quantity>
                                <Increment><i className="fas fa-minus" /></Increment>
                                <Count>15</Count>
                                <Decrement><i className="fas fa-plus" /></Decrement>
                            </Quantity>

                            <PriceContainer>
                                 <Price>CHF00</Price>
                                <Unit><span>/</span>Pc</Unit>
                            </PriceContainer>
                            </WrapPrice>

                        </Wrap>

                    </Info>
                </InfoConatiner>

            </ProductContainer>
        </Fragment>
    )
}
export default Product;