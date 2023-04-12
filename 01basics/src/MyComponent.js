// import React, { Component } from 'react'

// class MyComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             function: 'Increment'
//         }
//         this.handleClick = this.handleClick.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleClick() {
//         if (this.state.function === 'Increment') {
//             this.setState({ count: this.state.count + 1 })
//         }
//         else {
//             this.setState({ count: this.state.count - 1 })
//         }
//     }


//     handleChange() {
//         this.setState((prev) => {
//             if (prev.function === 'Increment') {
//                 return { ...prev, function: 'Decrement' }
//             }
//             return { ...prev, function: 'Increment' }
//         })
//     }

//     componentDidMount() {
//         console.log('component mounted');
//     }

//     componentDidUpdate() {
//         console.log('component updated');
//     }

//     render() {
//         { console.log('rendering') }
//         return (
//             // use props in class component
//             <div>
//                 <h1>Color is {this.props.color} </h1>
//                 <h1>Count is {this.state.count} <button onClick={this.handleChange}>Toggle</button></h1>
//                 <button onClick={this.handleClick}>{this.state.function}</button>
//             </div>
//         )
//     }
// }

// export default MyComponent;

/*
Note: This means that: when using props in class components, always use this keyword
Link: https://medium.com/swlh/class-based-components-in-react-440eb8ed85a0

https://medium.com/edge-coders/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2

*/


// --------------------- Functional Componemnt ------------------------
import React, { useEffect, useState } from 'react'

const Title = ({ count }) => {
    useEffect(() => {
        console.log('Mounted');

        return () => console.log('Unmounted');
    }, [count])
    return (
        <h1>Greater than 5!</h1>
    )
}

const MyComponent = () => {
    const [count, setCount] = useState(0);
    console.log("Rendering");
    return (
        <>
            {count > 5 && <Title count={count} />}
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default MyComponent