import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    let item = useLoaderData();

    return (
        <div>
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        </div>
    );
}

export const productLoader = async ({ params }) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
        const json = await response.json();
        return json;
    }
    catch (err) {
        console.log(err);
    }
}


export default Products