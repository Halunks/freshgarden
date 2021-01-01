import React, {Fragment, useState, useRef, useEffect} from 'react';
import {AddProductContainer, TopContainer, Image, Slogan, BottomConatiner,
        AddCardForm, CardOverview, Form, Unit, Dropdown, Option, Select, ButtonDelivery, ButtonPickUp, DropdownContainer, DropDownHeader,
        Left, Right, DropDownListContainer, DropdownList, List, Price,
        Delivery, Button, ButtonContainer, SliderConatiner, Input,
        CategoryContainer, CategoryLabel, Vegetable, Fruit, Mushrooms, Label, Slider,
        Upload, UploadLabel, ButtonUpload, Description, DescriptionLabel, TextArea, Title, Submit, UploadImage} from '../style/Addproduct'
import Footer from '../components/Footer/index.js'
import Header from '../components/Header/index';
import Card from '../components/Card/index.js'
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../store/actions/productAction";
import {CREATE_NEW_PRODUCT} from "../helpers/constants";
import {useHistory, useLocation} from "react-router-dom";
import {Logo} from "../style/Header";
import logo from '../assets/svgs/logo.svg'
import UnderConstruction from "../components/UnderConstruction";


const Addproduct = () => {
    const demo = useSelector(state => state.authReducer.demo)

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const author = useSelector(state => state.userProfileReducer.userInfo)
    const [category, setCategory] = useState('')
    const [changeIcon, setChangeIcon] = useState('');
    const [value, setValue] = useState([0, 20]);
    const [submit, setSubmit] = useState(false);

    const [product, setProduct] = useState({
        name: 'Sweet Sugar Pumpkin',
        location: 'Rapperswil-Jona',
        description: '',
        price: "12.90",
        selectedOption: '',
        file: null,
        units: 'piece',
        author: {
            first_name: 'Fred',
            last_name: 'Willis',
        },
    })

    // TODO build here a fetch function and in the store the userAction, userProfileReducer for the "author" object
    // useEffect(() => {
    //     const createProduct = async () => {
    //         await dispatch(productAction('products/new/', 'POST', CREATE_NEW_PRODUCT));
    //     }
    //     createProduct()
    //
    // }, [dispatch]);


    const changeHandler = e => {
        setProduct({...product, [e.target.name]: e.target.value});
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const body = `{ "content": "${product}" }`;
        dispatch(productAction('products/new/', 'POST', CREATE_NEW_PRODUCT, body));

;       const redirect = () => {
            const path = location.pathname;
            if (path === '/') {
                return history.push('/user/profile')
            }
        }
        redirect()
    }



    const handleChange = e => {
        e.preventDefault();
        setSubmit(true);
    }
    const updateRange = (e, data) => {
        setValue(data);
    }

    return (
        <Fragment>
            {!demo && <UnderConstruction text={"A functionality for uploading and selling a product is our highest priority."}/>}
            {demo && <div onClick={() => {
                window.opener = null
                window.open("https://docs.google.com/presentation/d/1PcmkSzGMDq_IrAmPvD5UsE0jvuOIJbhcg8WizfeojJk/edit#slide=id.gac87beb2e0_0_46", "_self")
                window.close()
            }}
                          style={{
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9000,
                width: "100%",
                position: "absolute",
                height: "100%",
                top: 0,
                color: "black",
                textAlign: "center",
                textJustify: "center",
            }}><h1 style={{
                color: '#B7C892',
                fontSize: "64px",
            }}>THE KOPFSALAT. Thank you.<br/><br/>UP NEXT<br/>A look inside the crystal ball<br/><Logo style={{height: "100px"}} src={logo}/></h1>
            </div>}

            {/*<AddProductContainer>*/}
            {/*    <Header />*/}
            {/*    <BottomConatiner>*/}
            {/*        <AddCardForm>*/}
            {/*        <form onChange={handleChange}>*/}
            {/*            <Title>Want to sell your Vegetables?</Title>*/}
            {/*            <Form>*/}
            {/*                <Input*/}
            {/*                    type='text'*/}
            {/*                    placeholder='Sweet Sugar Pumpkin'*/}
            {/*                    required='Required'*/}
            {/*                    name='name'*/}
            {/*                    onChange={changeHandler}/>*/}
            {/*                <Input*/}
            {/*                    type='text'*/}
            {/*                    placeholder='Rapperswil-Jona, St.Gallen'*/}
            {/*                    name='location'*/}
            {/*                    onChange={changeHandler}/>*/}
            {/*            </Form>*/}
            {/*            <Description>*/}
            {/*                <DescriptionLabel>Describe your products and how grew them...</DescriptionLabel>*/}
            {/*                <TextArea*/}
            {/*                    type='text'*/}
            {/*                    name='description'*/}
            {/*                    placeholder={'This year my sweet pumpkins (Pumpkin Field Trip F1) grew up to 5kg and are perfect for cakes and soups...'}*/}
            {/*                    onChange={changeHandler}*/}
            {/*                />*/}
            {/*            </Description>*/}
            {/*            <Unit>*/}
            {/*                <Label>Price</Label>*/}
            {/*                <Price*/}
            {/*                    type='number'*/}
            {/*                    step=".05" min='0'*/}
            {/*                    placeholder={'12.90'}*/}
            {/*                    name='price'*/}
            {/*                    onChange={changeHandler}*/}
            {/*                    required={'Required'} />*/}
            {/*                <Label>CHF</Label>*/}
            {/*                <Dropdown>*/}
            {/*                    <Select name='units' onChange={changeHandler}>*/}
            {/*                        <Option value={'piece'}>pc.</Option>*/}
            {/*                        <Option value={'kg'}>Kg</Option>*/}
            {/*                    </Select>*/}
            {/*                </Dropdown>*/}
            {/*            </Unit>*/}
            {/*            <ButtonContainer>*/}
            {/*                <ButtonDelivery onClick={() => setChangeIcon("delivery")}>Delivery</ButtonDelivery>*/}
            {/*                <ButtonPickUp onClick={() => setChangeIcon("pickup")}>Pick up</ButtonPickUp>*/}
            {/*            </ButtonContainer>*/}
            {/*            <SliderConatiner>*/}
            {/*                <Left>1.5 km</Left>*/}
            {/*                <Slider*/}
            {/*                    type='range'*/}
            {/*                    min={0.5} max={50}*/}
            {/*                    value={value}*/}
            {/*                    onChange={updateRange}/>*/}
            {/*                <Right>50 km</Right>*/}
            {/*            </SliderConatiner>*/}
            {/*            /!*<CategoryLabel>Select category</CategoryLabel>*!/*/}
            {/*            <CategoryContainer required={'Required'}>*/}
            {/*                /!*TODO make an "other" option for mushrooms for example*!/*/}
            {/*                <Vegetable onClick={() => setCategory('vegetable')}>Vegetable</Vegetable>*/}
            {/*                <Fruit onClick={() => setCategory('fruit')}>Fruit</Fruit>*/}
            {/*                <Mushrooms>Mashrooms</Mushrooms>*/}
            {/*            </CategoryContainer>*/}
            {/*            </form>*/}

            {/*            <Upload enctype="multipart/form-data">*/}
            {/*                <UploadLabel>Add product image</UploadLabel>*/}
            {/*                <UploadImage type='file'*/}
            {/*                name='image'*/}
            {/*                onClick={changeHandler}*/}
            {/*                required='Required'*/}
            {/*                />*/}
            {/*            </Upload>*/}
            {/*             <Submit value='Submit' onSubmit={handleSubmit}>Confirm</Submit>*/}
            {/*            </AddCardForm>*/}
            {/*            /!*TODO add expiration date input*!/*/}
            {/*        <CardOverview>*/}
            {/*            /!*TODO try do everything in variable "product" with "setProduct(...product, [variableName]: newValue"*!/*/}
            {/*            /!*TODO with this approach you only have to give the "product" as props - nothing else*!/*/}
            {/*            <Card product={product} changeIcon={changeIcon} category={category}/>*/}
            {/*        </CardOverview>*/}
            {/*    </BottomConatiner>*/}
            {/*</AddProductContainer>*/}
            {/*<Footer />*/}
        </Fragment>
    )
}
export default Addproduct;
