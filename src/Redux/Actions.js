import {
    GET_BOOK_DATA,
    ADD_USER,
    GET_USERS_DATA,
    ADD_TO_CART,
    SEARCH_BOOK,
    ORDER_BOOK,
    SET_QUANTITY,
    SET_LOGIN
} from './ActionTypes.js';

export const getBookData = (payload) => ({
    type: GET_BOOK_DATA,
    payload,
})

export const getUsersData = (payload) => ({
    type: GET_USERS_DATA,
    payload,
})

export const addUserData = (payload) => ({
    type: ADD_USER,
    payload,
})

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
})

export const searchBook  = (payload) => ({
    type: SEARCH_BOOK,
    payload,
})

export const orderBook = (payload) => ({
    type: ORDER_BOOK,
    payload,
})

export const setQuantity = (payload) => ({
    type: SET_QUANTITY,
    payload
})

export const setLogin = (payload) => ({
    type: SET_LOGIN,
    payload
})