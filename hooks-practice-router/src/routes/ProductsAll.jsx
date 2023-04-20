import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const ProductsAll = () => {
    const data = useLoaderData();
    return (
        <>
            <div>
                {data?.map((item) => (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export const productsLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://dummyjson.com/products`);
        const json = await response.json();
        return json['products'];
    }
    catch (err) {
        console.log(err);
    }
}

export default ProductsAll