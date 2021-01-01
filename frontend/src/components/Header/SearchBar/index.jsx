import React, {Fragment, useEffect, useState} from 'react'
import {
    Form,
    LocationContainer,
    SearchContainer,
    SearchInput,
    LocationInput,
    SearchButton,
    LocationButton,
    SubmitButton,
    AutocompleteOne,
    AutocompleteContainer,
    AutocompleteTwo,
    AutocompleteThree,
} from '../../../style/SearchBar'
import {locationAction} from "../../../store/actions/locationAction";
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../../../store/actions/productAction";
import {SET_LOCATION_SUBSET, SET_PRODUCTS_ALL, SET_PRODUCTS_SUBSET} from "../../../helpers/constants";

const SearchBar = () => {
    const dispatch = useDispatch();
    const productsAll = useSelector(state => state.productReducer.productsAll)
    const productsSubset = useSelector(state => state.productReducer.productsSubset)
    const [locationString, setLocationString] = useState('');
    const [searchString, setSearchString] = useState('');
    const [showAutocomplete, setShowAutocomplete] = useState(false);
    const [autocompleteOne, setAutocompleteOne] = useState('');
    const [autocompleteTwo, setAutocompleteTwo] = useState('');
    const [autocompleteThree, setAutocompleteThree] = useState('');

    const locationHandler = async e => {
        const inputValue = e.currentTarget.value
        setLocationString(inputValue)

        const response = await dispatch(locationAction(locationString))

        if (response === false || inputValue < 2) {
            setAutocompleteOne('')
            setAutocompleteTwo('')
            setAutocompleteThree('')
            return setShowAutocomplete(false)
        } else setShowAutocomplete(true)

        if (response.features[0]) setAutocompleteOne(response.features[0].place_name_en)
        if (response.features[1]) setAutocompleteTwo(response.features[1].place_name_en)
        if (response.features[2]) setAutocompleteThree(response.features[2].place_name_en)
    }

    const autocompleteHandler = async (e, location) => {
        e.preventDefault();
        setLocationString(location)
        setShowAutocomplete(false)
        let splitLocationString = locationString.split(",", 1).toString()
        await dispatch(productAction('products/?search=' + splitLocationString, 'GET', SET_LOCATION_SUBSET));
    }

    // client site search - really fast but all files have to be fetched first (not scalable)
    const searchHandler = async e => {
        const inputString = e.currentTarget.value
        if (locationString && inputString.length < 2 && e.currentTarget.value === '') setLocationString('')
        if (inputString === ' ') return
        let payload = []
        setSearchString(inputString)

        setShowAutocomplete(false)
        const createProductsSubset = () => {
            let searchStringArray = []
            if (productsAll === false) return

            for (const word of inputString.split(' ')) {
                let wordStrip = word.toLowerCase()
                let locationStrip = wordStrip
                if (locationString) locationStrip = locationString
                const searchStringObject = {
                    author: {
                        first_name: wordStrip,
                        last_name: wordStrip,
                    },
                    location: locationStrip,
                    category: wordStrip,
                    name: wordStrip,
                }
                searchStringArray.push(searchStringObject)
            }

            for (const product of productsAll) {
                const searchMatchChecker = (product) => {
                    for (const object of searchStringArray) {
                        return (product.author.first_name.toLowerCase().includes(object.author.first_name))
                            || (product.author.last_name.toLowerCase().includes(object.author.last_name))
                            || (product.category.toLowerCase().includes(object.category))
                            || (product.name.toLowerCase().includes(object.name))
                            && (product.location.toLowerCase().includes(object.location))
                    }
                }
                const match = searchMatchChecker(product)
                if (match) payload.push(product)
            }
        }
        createProductsSubset()
        await dispatch(productAction('', '', SET_PRODUCTS_SUBSET, '', payload))
    }

    // this can be used for an Web API based search
    // const submitSearchHandler = async e => {
    //     e.preventDefault()
    //     setShowAutocomplete(false)
    //     let space = ''
    //     let splitLocationString = locationString.split(",", 1).toString()
    //     if (splitLocationString[0] !== '') space = ' '
    //
    //     await dispatch(productAction('products/?search=' + splitLocationString + space + searchString, 'GET', SET_PRODUCTS_SUBSET));
    // }

    return (
        <Fragment>
            <Form>
                <LocationContainer>
                    <LocationButton onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-map-marker-alt"/>
                    </LocationButton>
                    <LocationInput
                        name={'location'}
                        type={'text'}
                        placeholder={"Location"}
                        onChange={locationHandler}
                        value={locationString}
                        autoComplete={"off"}
                    />
                </LocationContainer>

                {showAutocomplete ? (
                    <AutocompleteContainer>
                        {{autocompleteOne} &&
                        <AutocompleteOne
                            onClick={(e) => autocompleteHandler(e, autocompleteOne)}>
                            <i className="fas fa-map-marker"/>
                            {autocompleteOne}
                        </AutocompleteOne>}
                        {{autocompleteTwo} &&
                        <AutocompleteTwo
                            onClick={(e) => autocompleteHandler(e, autocompleteTwo)}>
                            <i className="fas fa-map-marker"/>
                            {autocompleteTwo}
                        </AutocompleteTwo>}
                        {{autocompleteThree} &&
                        <AutocompleteThree
                            onClick={(e) => autocompleteHandler(e, autocompleteThree)}>
                            <i className="fas fa-map-marker"/>
                            {autocompleteThree}
                        </AutocompleteThree>}
                    </AutocompleteContainer>
                ) : null}

                <SearchContainer>
                    <SearchButton onClick={(e) => e.preventDefault()}>
                        <i className="fas fa-search"/>
                    </SearchButton>
                    <SearchInput
                        name={"search"}
                        type={'search'}
                        placeholder={"Search"}
                        onChange={searchHandler}
                        value={searchString}
                        autoComplete={"off"}

                    />
                </SearchContainer>
                {/*<SubmitButton type='submit'>*/}
                {/*    <i className="fas fa-search"></i>*/}
                {/*</SubmitButton>*/}
            </Form>
        </Fragment>
    )
}

export default SearchBar;
