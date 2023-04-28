// import { connect } from "react-redux"
// import { buyIceCream } from "./redux"

// const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
//     return (
//         <>
//             <h1>Number of Ice creams - {numOfIceCreams}</h1>
//             <button onClick={buyIceCream}>Buy Ice-Cream</button>
//         </>
//     )
// }


// const mapStateToProps = state => {
//     return {
//         numOfIceCreams: state.iceCream.numOfIceCreams
//     }
// }

// const mapDisptachToProps = dispatch => {
//     return {
//         buyIceCream: () => dispatch(buyIceCream())
//     }
// }

// export default connect(mapStateToProps, mapDisptachToProps)(IceCreamContainer)



// import { buyIceCream } from "./redux"

// const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
//     return (
//         <>
//             <h1>Number of Ice creams - {numOfIceCreams}</h1>
//             <button onClick={buyIceCream}>Buy Ice-Cream</button>
//         </>
//     )
// }


// const mapStateToProps = state => {
//     return {
//         numOfIceCreams: state.iceCream.numOfIceCreams
//     }
// }

// const mapDisptachToProps = dispatch => {
//     return {
//         buyIceCream: () => dispatch(buyIceCream())
//     }
// }

// export default IceCreamContainer




import { connect, useDispatch, useSelector } from "react-redux"
import { icecreamActions } from "./features/icecream/icecreamSlice"


const IceCreamContainer = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Number of Ice creams - {numOfIceCreams}</h1>
            <button onClick={() => dispatch(icecreamActions.ordered())}>Buy Ice-Cream</button>
        </>
    )
}


export default IceCreamContainer