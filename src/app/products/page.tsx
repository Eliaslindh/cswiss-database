import React, { useEffect, useState } from 'react';
import { getProducts } from '@/app/utils/getProducts';
import Link from 'next/link';

type product = {
    id: number,
    name: string,
    price: number,
    stock: number
}
export default async function Products() {
    const products: product[] = await getProducts() as product[]

    return (
        <div>
            

            <div>
                {products.map((product) => (
                    <Link href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                ))}s
            </div>
        </div>
    );
}
