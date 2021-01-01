import React, {Fragment, useEffect, useState} from 'react';
import {HomeContainer, Box
} from '../style/Homepage';
import {
    TitleContainer, UserProfileContainer,
    AvatarContainer, Avatar, Name, City,
    ButtonEdit, BottomContainer, TitleGarden,
    TitleLocation, AddressInfo, TitleTel,
    TelContainer, UserInfoContainer, AboutGarden,
    AboutText, MainTitle, Info, Email, Contact,
    Mobile, LogOut, AsideContainer, LeftContainer,
    Image, Delivery, TitleWrap, ButtonWrap, ProfilePicture, ProfileHexagon
} from '../style/Profile'
import Header from '../components/Header'
import Footer from '../components/Footer/index'
import garden from '../assets/kopf-salad.jpg'
import defaultAvatar from '../assets/images/profile.png';
import Card from '../components/Card/index.js'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {userAction} from "../store/actions/userAction";
import {authAction} from "../store/actions/authAction";
import {LOGOUT_UNSET_TOKEN, SET_PRODUCTS_ALL} from "../helpers/constants";
import {productAction} from "../store/actions/productAction";
import {RightConatiner} from "../style/Checkoutpage";
import Hexagon from "../components/Hexagon";


const Profile = ({author}) => {
    const demo = useSelector(state => state.authReducer.demo)

    const productsAll = useSelector(state => state.productReducer.productsAll)
    const user = useSelector(state => state.userProfileReducer.author)
    const dispatch = useDispatch();
    const history = useHistory();
    const [location, setLocation] = useState('')
    const [first_name, setFirstName] = useState('Jane');
    const [last_name, setLastName] = useState('Doe');
    const [email, setEmail] = useState('jane@gmail.com');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('+41 78 535 ## ##');
    const [address, setAddress] = useState('');
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [city, setCity] = useState('+ 41 79 543 ## ##')
    const [zip, setZip] = useState('');
    const [products, setProducts] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(userAction('users/me/', 'GET', 'GET_USER'));
        }
        fetchUser()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true)
            await dispatch(productAction('products/', 'GET', SET_PRODUCTS_ALL));
            setIsLoading(false);
        }
        fetchProducts()
        return function cleanup() {};
    }, [dispatch]);

    useEffect(() => {
        const userInfo = () => {
            if(user.location) setLocation(user.location);
            if(user.zip) setLocation(user.location);
            if(user.first_name) setFirstName(user.first_name);
            if(user.last_name) setLastName(user.last_name);
            if(user.email) setEmail(user.email);
            if(user.address) setAddress(user.address);
            if(user.city) setCity(user.city);
            if(user.description) setDescription(user.description);
            if(user.phone) setPhone(user.phone);
            if(productsAll) setProducts(productsAll);
        }
        userInfo()
        return function cleanup() {};
    })

    const logout = () => {
       dispatch(authAction('', '', LOGOUT_UNSET_TOKEN))
       history.push('/user/login')
    }

    return (
        <Fragment>
            {!demo &&
            <HomeContainer>
                <Header />

                    <TitleContainer>
                        <TitleWrap>
                         <MainTitle>Profile</MainTitle>
                            </TitleWrap>
                        <ButtonWrap>
                        <LogOut onClick={logout}>Logout</LogOut>
                            </ButtonWrap>
                     </TitleContainer>

                <BottomContainer>
                    <LeftContainer>
                        <UserProfileContainer>
                            <UserInfoContainer>
                                <AboutGarden>
                                    <TitleGarden>Warm welcome Ruth</TitleGarden>
                                    <AboutText>{user.first_name} {user.last_name}</AboutText>
                                </AboutGarden>
                                <Hexagon user={user}/>

                                {/*{user.username &&
                                <Info>
                                    <TitleLocation>Initial contribution consideration</TitleLocation>
                                    <AddressInfo>`User ID: ${user.username[6]}####...`</AddressInfo>
                                </Info>
                                }*/}

                                <Contact>
                                    {/*<TitleTel>Releases</TitleTel>*/}
                                    <TelContainer>{user.email}</TelContainer>
                                </Contact>
                                <Delivery>
                                    <p style={{marginTop: 15,}}>
                                        We keep you updated about the project by not sending more than 3 emails a year. Unsubscribing is possible on every email.
                                    </p>
                                </Delivery>
                            </UserInfoContainer>
                        </UserProfileContainer>
                    </LeftContainer>

                    <RightConatiner>
                        <AsideContainer>
                            <Image src={garden} />
                        </AsideContainer>
                    </RightConatiner>

                </BottomContainer>

                <Box style={{width: "100%", marginTop: 0, paddingTop: "32px"}}>
                     {products && products.map((product) => product.author.first_name === "Emma" && <Card product={product} sold={"true"}/>
                         // <Card product={product} key={product.id}/>
                     )}
                </Box>
            </HomeContainer>
            }

            {/*TODO refactor or remove*/}
            {demo &&
            <HomeContainer>
                <Header/>

                <TitleContainer>
                    <TitleWrap>
                        <MainTitle>Profile</MainTitle>
                    </TitleWrap>
                    <ButtonWrap>
                        <LogOut onClick={logout}>Logout</LogOut>
                    </ButtonWrap>
                </TitleContainer>

                <BottomContainer>

                    <LeftContainer>

                        <UserProfileContainer>
                            <AvatarContainer>
                                {avatar && <Avatar src={avatar} alt='avatar'/>}
                                <Name>{`${first_name} ${last_name}`}</Name>
                                <ButtonEdit>Edit</ButtonEdit>
                            </AvatarContainer>

                            <UserInfoContainer>

                                <AboutGarden>
                                    <TitleGarden>About me and my garden</TitleGarden>
                                    {description && <AboutText>{description}</AboutText>}
                                </AboutGarden>

                                <Info>
                                    <TitleLocation>My Garden's Location</TitleLocation>
                                    <AddressInfo>
                                        {/*<ZipCode>{zip}</ZipCode>*/}
                                        {/*<City>{user.city ? city.city : null}</City>*/}
                                        {/*<City>{user.address ? city.city : null}</City>*/}
                                        {/*<Address>{address}</Address>*/}
                                        {city && <City>{city}</City>}
                                    </AddressInfo>
                                </Info>


                                <Contact>
                                    <TitleTel>Contact</TitleTel>
                                    <TelContainer>
                                        {phone && <Mobile>{phone}</Mobile>}
                                        {email && <Email>{email}</Email>}
                                    </TelContainer>
                                </Contact>

                                <Delivery>
                                    <i className="fas fa-truck"/>
                                    <p>I do delivery up to 21km</p>
                                </Delivery>

                            </UserInfoContainer>

                        </UserProfileContainer>

                    </LeftContainer>

                    <RightConatiner>
                        <AsideContainer>
                            <Image src={garden}/>
                        </AsideContainer>
                    </RightConatiner>

                </BottomContainer>

                <Box style={{width: "100%", marginTop: 0, paddingTop: "32px"}}>
                    {products && products.map((product) => product.author.first_name === "Emma" &&
                        <Card product={product} sold={"true"}/>
                        // <Card product={product} key={product.id}/>
                    )}
                </Box>
            </HomeContainer>
            }
            <Footer />
        </Fragment>
    )
}


export default Profile;