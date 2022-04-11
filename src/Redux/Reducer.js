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

const initialState = {
    books: [],
    filteredBooks: [],
    users: [],
    cartData: [],
    orderedData: [],
    isLogin: false,
}

export const Reducer = (store = initialState, action) => {
    switch(action.type){
            case GET_BOOK_DATA:
                return {
                    ...store,
                    books: action.payload,
                    filteredBooks: action.payload,
                }
            case GET_USERS_DATA:
                return {
                    ...store,
                    users: action.payload,
                }
            case ADD_USER:
                return {
                    ...store,
                    // users: [...users, action.payload]
                }
            case ADD_TO_CART:
                return {
                    ...store,
                    cartData: [...store.cartData, action.payload]
                }
            case SEARCH_BOOK:
                let searchedData = store.books.filter((item) => item.name == action.payload || item.author == action.payload)
                return {
                    ...store,
                    filteredBooks: searchedData,
                }
            case ORDER_BOOK:
                return {
                    ...store,
                    // orderedData : [...cartData]
                }
            case SET_QUANTITY:
                let updatedData = store.cartData.map((item) => {
                    item.id == action.payload.id ? item.quantity = action.payload.quantity
                                                 : item = item;                                    
                })
                return {
                    ...store,
                    cartData: [...updatedData]
                }
            case SET_LOGIN:
                return {
                    ...store,
                    // orderedData : [...cartData]
                    isLogin: action.payload
                }
            default:
                return store
    }
}