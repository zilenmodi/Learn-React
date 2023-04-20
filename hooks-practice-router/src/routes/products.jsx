import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';

const Products = () => {
    let item = useLoaderData();
    let { productId } = useParams()
    return (
        <>
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={`${item.id}/edit`}>Edit</a>
            </div>
        </>
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