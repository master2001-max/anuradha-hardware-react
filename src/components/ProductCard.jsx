import React from 'react';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 p-4 flex flex-col">
            <img src={product.image} alt={product.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-primary font-bold text-lg mt-2">${product.price}</p>
            <button className="mt-auto bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition">
                Add to Cart
            </button>
        </div>
    );
}
