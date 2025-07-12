import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <section className="px-6 py-10">
                <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    );
}
