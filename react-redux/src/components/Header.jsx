// import React from 'react'
// import { useContext } from 'react'
// import { ItemsContext } from '../Context'
// // import { CartContext, WishListContext } from '../Context'

// const Header = () => {
//     const { cartItem, brandName } = useContext(CartContext)
//     const { wishlistItem } = useContext(WishListContext)
//     return (
//         <>
//             <div style={{ border: "5px solid green" }}>
//                 <h1>{brandName}</h1>
//                 <h1>
//                     Cart Items - {cartItem}
//                     Wish List Items - {wishlistItem}
//                 </h1>
//             </div>
//             {/* <div style={{ border: "5px solid green" }}>
//                 <CartContext.Consumer>
//                     {
//                         (props) => (
//                             <>
//                                 <h1>{props.brandName}</h1>
//                                 <h1>
//                                     Cart Items - {props.cartItem}
//                                     <WishListContext.Consumer>
//                                         {
//                                             (props) => <>Wishlist Items - {props.wishlistItem}</>
//                                         }
//                                     </WishListContext.Consumer>
//                                 </h1>
//                             </>
//                         )
//                     }
//                 </CartContext.Consumer>
//             </div> */}
//         </>
//     )
// }

// export default Header



import React from 'react'
import { useContext } from 'react'
import { ItemsContext } from '../Context'

const Header = () => {
    const { state } = useContext(ItemsContext)
    return (
        <>
            <div style={{ border: "5px solid green" }}>
                <h1>{state.brandName}</h1>
                <h1>
                    Cart Items - {state.cartItem}
                    Wish List Items - {state.wishlistItem}
                </h1>
            </div>
        </>
    )
}

export default Header