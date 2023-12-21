import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

const ProductItem = () => {

    const product = useSelector((state) => state.products.product)

    return (
        <div>
            <ProductCard product={product} />
        </div>
    );
}

export default ProductItem;
