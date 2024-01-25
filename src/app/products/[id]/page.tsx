import React from 'react'
import { getProductById } from '@/app/utils/getProducts'

export default async function productId({ params }: { params: { id: string } }) {
    const product = await getProductById(params.id)
    return (
        <div>productId:{params.id} </div>
    )
}
