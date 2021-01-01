import React, {Fragment, useEffect, useState} from 'react'
import {
    CardContainer,
    TopContainer,
    Image,
    BottomContainer,
    LowerContainer,
    UpperContainer,
    ProductName,
    Location,
    DeliveryOptions,
    PickUpIcon,
    DeliveryIcon,
    SellerContainer,
    Portrait,
    SellerName,
    StockContainer,
    Stock,
    PriceContainer,
    CurrencyTag,
    PriceTag,
    Unit,
    UpperRightContainer,
    UpperLeftContainer,
    AddToCart,
    PromotionIcon,
    DeliveryDistance,
    ExpiryDate,
    ImageContainer,
    PortraitContainer,
    PickUpContainer,
    DeliveryContainer,
    ExpiryContainer,
    ExpiryIcon
} from '../../style/Card';
import defaultImage from '../../assets/images/default_pumpkin.jpg'
import { ReactComponent as PromoIcon} from '../../assets/icons/disc_2.svg';
import {cartAction} from "../../store/actions/cartAction";
import {useDispatch} from "react-redux";
import {ADD_TO_CART} from "../../helpers/constants";


const Card = ({product, sold}) => {
    const dispatch = useDispatch();
    const [availableStock, setAvailableStock] = useState(product.stock)
    const [name, setName] = useState('First Lastname')
    const [productName, setProductName] = useState('Product Name')
    const [expirationDate, setExpirationDate] = useState('01.01.2021')
    const [image, setImage] = useState(defaultImage)
    const [imageAuthor, setImageAuthor] = useState('')
    const [location, setLocation] = useState('Location')
    const [unit, setUnit] = useState('na')
    const [price, setPrice] = useState("0.00")
    const [renderedStock, setRenderedStock] = useState(1)
    const [style, setStyle] = useState(null)
    const [styleDiscount, setStyleDiscount] = useState(null)
    const [discountedPrice, setDiscountedPrice] = useState('')
    const [deliveryRadius, setDeliveryRadius] = useState(null)
    const [soldStyle, setSoldStyle] = useState(null)

    // formatting backend information and handling the real time render of the "addproduct" page
    useEffect(() => {
        const unitFormatter = () => {
            if (product.stock) setAvailableStock(product.stock)
            if (product.stock && product.stock <= 99) setRenderedStock(product.stock)
            if (product.stock && product.stock > 99) setRenderedStock('99+')
            if (product.units === 'kg') setUnit('Kg')
            if (product.units === 'piece') setUnit('pc.')
            if (product.image) setImage(product.image)
            if (product.author && product.author.profile_picture) setImageAuthor(product.author.profile_picture)
            if (product.author && product.author.first_name && product.author.last_name) setName(product.author.first_name + ' ' + product.author.last_name)
            if (product.name) setProductName(product.name)
            if (product.location) setLocation(product.location)
            if (product.price) setPrice((Math.ceil(product.price * 20)/20).toFixed(2))
            if (product.expiration_date) setExpirationDate(product.expiration_date)
            if (product.deliver_within_radius) setDeliveryRadius(product.deliver_within_radius)
            if (product.promotion) {
                setDiscountedPrice((Math.ceil((product.price / product.promotion) * 20)/20).toFixed(2))
                let styleObject = {
                    textDecoration: "line-through",
                    fontSize: "1.2rem",
                    alignSelf: "center",
                    margin: "2px",
                    color: 'grey',
                }
                setStyle(styleObject)
                styleObject = {
                    color: "#B8860B",
                    marginLeft: 0,
                }
                setStyleDiscount(styleObject)
            }
            if (sold) {
                let styleObject = {
                    opacity: "0.4",
                }
                setSoldStyle(styleObject)
            }
        }
        unitFormatter();
        return function cleanup() {};
    },[product])

    const addToCartHandler = () => {
        // TODO resolve conflict issue of two parties ordering complete stock
        const fetchNewCart = async () => {
            await dispatch(cartAction(`cart/add/${product.id}/`, 'POST', ADD_TO_CART))
        }
        fetchNewCart();
        if (availableStock === 0) return
        setAvailableStock(availableStock - 1)
        if (availableStock - 1 > 99) return setRenderedStock('99+')
        if (availableStock - 1 <= 99) return setRenderedStock(availableStock - 1)
    }

    return (
        <Fragment>
            <CardContainer style={soldStyle}>
                <TopContainer>
                    {product.promotion && <PromotionIcon><PromoIcon/></PromotionIcon>}
                    <ImageContainer><Image src={image}/></ImageContainer>
                </TopContainer>
                <BottomContainer>
                    <UpperContainer>
                        <UpperLeftContainer>
                            <ProductName>{productName}<br/>{sold && "SOLD Jason: 1"}</ProductName>
                            {!sold && <DeliveryOptions>
                                <DeliveryContainer>
                                    {deliveryRadius && <DeliveryIcon><i className="fas fa-truck"/></DeliveryIcon>}
                                    {deliveryRadius &&
                                    <DeliveryDistance>delivery up to {deliveryRadius}km</DeliveryDistance>}
                                </DeliveryContainer>
                                <PickUpContainer>
                                    <PickUpIcon><i className="fas fa-hiking"/></PickUpIcon>
                                    <Location>{deliveryRadius ? "or pick up @" : "pick up @"}{location}</Location>
                                </PickUpContainer>
                                <ExpiryContainer>
                                    <ExpiryIcon><i className="fas fa-seedling"/></ExpiryIcon>
                                    <ExpiryDate>ad expires {expirationDate}</ExpiryDate>
                                </ExpiryContainer>
                            </DeliveryOptions>}
                        </UpperLeftContainer>
                        <UpperRightContainer>
                            <SellerContainer>
                                <PortraitContainer>{imageAuthor ? <Portrait src={imageAuthor}/> :
                                    <i className="fas fa-user-circle"/>}</PortraitContainer>
                                <SellerName>{name}</SellerName>
                            </SellerContainer>
                        </UpperRightContainer>
                    </UpperContainer>
                    <LowerContainer>
                        <StockContainer>
                            <Stock>{renderedStock}</Stock>
                            <AddToCart onClick={addToCartHandler}><i className="fas fa-shopping-basket"/></AddToCart>
                        </StockContainer>
                        <PriceContainer>
                            <CurrencyTag>CHF</CurrencyTag>
                            <PriceTag style={style}>{price}</PriceTag>
                            {product.promotion && <PriceTag style={styleDiscount}>{discountedPrice}</PriceTag>}
                            <Unit>/ {unit}</Unit>
                        </PriceContainer>
                    </LowerContainer>
                </BottomContainer>
            </CardContainer>
        </Fragment>
    )
}
export default Card;