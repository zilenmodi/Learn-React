import React, { useState } from 'react'
import { Form, redirect, useLoaderData } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const EditProducts = () => {
    const item = useLoaderData();
    const [updateItem, setUpdateItem] = useState(item);
    return (
        <>
            <Form method='put'>
                <input name='title' value={updateItem.title} type='text' onChange={(e) => setUpdateItem({ ...updateItem, ['title']: e.target.value })} />
                <input name='description' value={updateItem.description} type='text' onChange={(e) => setUpdateItem({ ...updateItem, ['description']: e.target.value })} />
                <button type='submit'>Save</button>
            </Form>
        </>
    )
}

export const putProducts = async ({ params, request }) => {
    try {
        const response = await fetch(`https://dummyjson.com/products/${params.productId}`, {
            method: 'put',
            body: await request.formData()
        });
        if (!response.ok) throw res;
    }
    catch (err) {
        throw err;
    }

    return redirect(`/products/${params.productId}`)
}

export default EditProducts