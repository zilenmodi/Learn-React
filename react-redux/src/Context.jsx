// import React from 'react'
// import { createContext } from 'react'
// import { useState } from 'react'

// export const CartContext = createContext()
// export const WishListContext = createContext()

// const Context = (props) => {
//     const [cartItem, setCartItem] = useState(0)
//     const [wishlistItem, setWishlistItem] = useState(0)
//     const brandName = 'SARAL'
//     return (
//         <WishListContext.Provider value={{ wishlistItem, setWishlistItem }}>
//             <CartContext.Provider value={{ cartItem, setCartItem, brandName }}>
//                 {props.children}
//             </CartContext.Provider>
//         </WishListContext.Provider>
//     )
// }

// export default Context


import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const initialState = {
    cartItem: 0,
    wishlistItem: 0,
    brandName: 'SARAL'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return { ...state, cartItem: state.cartItem + 1 }

        case 'ADD_WISHLIST':
            return { ...state, wishlistItem: state.wishlistItem + 1 }

        case 'CLEAR_CART':
            return { ...state, cartItem: 0 }

        case 'CLEAR_WISHLIST':
            return { ...state, wishlistItem: 0 }

        default:
            return state
    }
}

export const ItemsContext = createContext()

const Context = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ItemsContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default Context