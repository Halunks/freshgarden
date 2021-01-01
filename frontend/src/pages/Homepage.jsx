import React, {Fragment, useEffect, useState} from 'react';
import {
    TopContainer, Image, Box, HomeContainer, BottomContainer, Slogan, SideBox
} from '../style/Homepage';
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import Card from '../components/Card/index';
import ShoppingCart from "../components/ShoppingCart";
import PromotedProducts from "../components/PromotedProducts";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {productAction} from "../store/actions/productAction";
import {SET_PRODUCTS_ALL} from "../helpers/constants";
import {Loading} from "../components/Loading";
import Banner from "../components/Header/Banner";

const Homepage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const products = useSelector(state => state.productReducer.productsSubset);
    const viewCart = useSelector(state => state.cartReducer.viewCart);
    const [isLoading, setIsLoading] = useState(true)

    // redirecting to the shop when accessing the root
    useEffect(() => {
        const redirect = () => {
            const path = location.pathname;
            if (path === '/') {
                return history.push('/shop')
            }
        }
        redirect()
    },[history, location.pathname])

    // fetching all products
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            await dispatch(productAction('products/', 'GET', SET_PRODUCTS_ALL));
            setIsLoading(false);
        }
        fetchProducts()
        return function cleanup() {};
    }, [dispatch]);


    return (
        <Fragment>
            <HomeContainer>
                <Header />

                {isLoading ? <Loading /> : (
                <BottomContainer>
                    <Box>
                        {products.map((product) => <Card product={product} key={product.id}/>)}
                    </Box>
                    <SideBox>
                    <PromotedProducts products={products} />
                    </SideBox>
                </BottomContainer>
                )}
            </HomeContainer>
            <Footer />
        </Fragment>
    )
}

export default Homepage;