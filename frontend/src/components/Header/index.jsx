import React, {Fragment, useEffect, useState} from 'react'
import {
    HeaderContainer,
    Icons,
    NavLinkHome,
    NavLinkAbout,
    NavLinkProfile,
    FormContainer,
    LogoContainer,
    CartIcon,
    NavLinkShop,
    NavLinkAddProduct, Logo, LogoNavBar, NavLinkCommunity
} from '../../style/Header';
import '../../style/Navbar.css'
import {cartAction} from "../../store/actions/cartAction";
import {RESET_NOT_LOGGED_IN, TOGGLE_CART_VIEW} from "../../helpers/constants";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import SearchBar from "./SearchBar";
import ShoppingCart from "../ShoppingCart";
import Banner from "./Banner";
import logo from '../../assets/svgs/logo_with_text.svg';
import logo_mono from '../../assets/svgs/logo.svg';

const Header = () => {
    const location = useLocation();
    const viewCart = useSelector(state => state.cartReducer.viewCart)
    const dispatch = useDispatch();
    const redirectFlagRedux = useSelector(state => state.cartReducer.redirectFlag)
    const [redirectFlagComponent, setRedirectFlagComponent] = useState(false)
    const [classLabel, setClassLabel] = useState('default')
    const tokenRedux = useSelector(state => state.authReducer.token)
    const [loginCheck, setLogicCheck] = useState(false)


    // lights up the profile navigation button if not logged in
    // TODO also do this for the "add product" page
    useEffect(() => {
        const redirectCheck = async () => {
            if (tokenRedux) {
                setLogicCheck(true)
            } else setLogicCheck(false)
            if (redirectFlagRedux && !redirectFlagComponent) {
                setClassLabel('impulse')
                return setRedirectFlagComponent(true)
            } else if (classLabel === 'impulse' && redirectFlagComponent) {
                setRedirectFlagComponent(false)
                const timer = setTimeout(() => setClassLabel('fade'), 100);
                dispatch(cartAction('', '', RESET_NOT_LOGGED_IN))
                return () => clearTimeout(timer);
            }
        }
        redirectCheck()
    },)


    return (
        <Fragment>
            <Banner />
            <HeaderContainer >

                <LogoContainer>
                    <NavLinkHome to='/shop'><Logo src={logo}/></NavLinkHome>
                </LogoContainer>

                <FormContainer>
                    {location.pathname === '/shop' && <SearchBar />}
                </FormContainer>

                <Icons >
                    <NavLinkAddProduct
                        to='/about'>
                        {/*<i className="fas fa-plus-circle"/>*/}
                        <LogoNavBar src={logo_mono}/>
                    </NavLinkAddProduct>
                    <NavLinkCommunity
                        to='/community'>
                        <i className="fas fa-users"/>
                    </NavLinkCommunity>
                    <NavLinkShop
                        to='/shop'
                        isActive={() => ['/shop', '/', '/checkout', '/order'].includes(location.pathname)}>
                        <i className="fas fa-store"/>
                    </NavLinkShop>
                    <CartIcon
                        onClick={() => dispatch(cartAction('', '', TOGGLE_CART_VIEW))}
                        className={viewCart ? "active" : "inactive"}>
                        <i className="fas fa-shopping-basket" />
                    </CartIcon>
                    <NavLinkAbout
                        to='/upload'>
                        <i className="fas fa-plus-circle"/>
                    </NavLinkAbout>
                    <NavLinkProfile
                        to='/user/profile'
                        className={classLabel}
                        isActive={() => ['/user/profile', '/user/login', '/user'].includes(location.pathname)}>
                        <i className="fas fa-user"/>
                    </NavLinkProfile>
                    {viewCart && <ShoppingCart/>}
                </Icons>

            </HeaderContainer>
        </Fragment>
    )
}

export  default Header;