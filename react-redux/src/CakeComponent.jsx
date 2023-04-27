import React from 'react'
import { buyCake } from './redux/index'
import { connect, useDispatch, useSelector } from 'react-redux'

// const CakeComponent = ({ numOfCakes, buyCake }) => {
//     return (
//         <>
//             <h1>Number of cakes - {numOfCakes}</h1>
//             <button onClick={buyCake}>Buy Cake</button>
//         </>
//     )
// }

// const mapStateToProps = state => {
//     //take redux state and return object
//     return {
//         numOfCakes: state.numOfCakes
//     }
// }

// const mapDisptachToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps, mapDisptachToProps)(CakeComponent)




const CakeComponent = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}

export default CakeComponent