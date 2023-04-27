import React from 'react'
import { useContext } from 'react'
import { ItemsContext } from '../Context'
// import { CartContext, WishListContext } from '../Context'

const items = [
    {
        id: 1,
        name: "iphone 9"
    },
    {
        id: 2,
        name: "iphone 14"
    },
    {
        id: 3,
        name: "iphone 16"
    }
]

const Main = () => {
    const { dispatch } = useContext(ItemsContext)
    return (
        <>
            <div style={{ border: "5px solid blue" }}>
                {
                    items.map((item) => {
                        return (
                            <>
                                <h1>{item.name}</h1>
                                <button onClick={() => dispatch({ type: 'ADD_CART' })}>Add to cart</button>
                                <button onClick={() => dispatch({ type: 'ADD_WISHLIST' })}>Add to Wishlist</button>
                            </>
                        )
                    })
                }
            </div>
            <div style={{ border: "5px solid red" }}>
                <button onClick={() => dispatch({ type: 'CLEAR_CART' })}>Clear cart</button>
                <button onClick={() => dispatch({ type: 'CLEAR_WISHLIST' })}>Clear wishlist</button>
            </div>
        </>
    )
}

export default Main