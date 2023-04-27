import { connect } from "react-redux"
import { buyIceCream } from "./redux"

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
    return (
        <>
            <h1>Number of Ice creams - {numOfIceCreams}</h1>
            <button onClick={buyIceCream}>Buy Ice-Cream</button>
        </>
    )
}


const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDisptachToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(IceCreamContainer)