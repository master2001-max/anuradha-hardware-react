import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded shadow hover:shadow-lg transition p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.category}</p>
            <p className="text-blue-600 font-bold mt-2">Rs. {product.price}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
            </button>
        </div>
    );
}
