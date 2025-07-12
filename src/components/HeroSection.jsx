import React from 'react';

export default function HeroSection() {
    return (
        <section className="bg-gray-100 text-center py-16 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Welcome to Anuradha Hardware
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                Find all your tools, fittings, and hardware essentials in one place!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                Shop Now
            </button>
        </section>
    );
}
