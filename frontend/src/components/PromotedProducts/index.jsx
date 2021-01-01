import React, {Fragment} from 'react'
import Card from "../Card";
import {Box, PromotedProductsContainer} from "../../style/Homepage";


const PromotedProducts = ({products}) => {
    const productSelection = products.filter((products) => products.promotion)
    return (
        <Fragment>
            <PromotedProductsContainer>
                {productSelection.map((product) => <Card product={product} key={product.id}/>)}
            </PromotedProductsContainer>
        </Fragment>
    )
}

export default PromotedProducts;
