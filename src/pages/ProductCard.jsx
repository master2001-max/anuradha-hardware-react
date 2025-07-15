import React from 'react';

export default function ProductCard({ product, className, onAddToCart }) {
    return (
        <div className={`border rounded-lg shadow p-4 bg-white ${className}`}>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.description}</p>
            <p className="mt-1 text-primary font-bold">Rs. {product.price}</p>
            <button
                onClick={onAddToCart}
                className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
                Add to Cart
            </button>
        </div>
    );
}
