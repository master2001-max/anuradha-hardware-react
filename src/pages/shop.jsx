import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';

export default function Shop({ addToCart }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const [sortOption, setSortOption] = useState('featured');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            default:
                return a.featured ? -1 : 1;
        }
    });

    const categories = ['all', ...new Set(products.map(product => product.category))];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased min-h-screen">
            <Navbar />

            <section className="bg-gradient-to-r from-primary to-primary-dark py-20 px-4 sm:px-6 text-center text-white">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Collection</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Browse our complete range of high-performance tools and hardware
                    </p>
                </div>
            </section>

            <section className="px-4 sm:px-6 py-12 lg:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${activeCategory === category
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-gray-600 text-sm font-medium">Sort by:</span>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Customer Rating</option>
                            </select>
                        </div>
                    </div>

                    {sortedProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {sortedProducts.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        onAddToCart={() => addToCart(product)}
                                        className="hover:scale-[1.02] transition-transform duration-300"
                                    />
                                ))}
                            </div>

                            <div className="mt-16 flex justify-center">
                                <nav className="flex items-center gap-2">
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                                        &lt;
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-medium">
                                        1
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                                        2
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                                        3
                                    </button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-50">
                                        &gt;
                                    </button>
                                </nav>
                            </div>
                        </>
                    ) : (
                        <div className="text-center py-16">
                            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your filters to find what you're looking for.</p>
                            <button
                                onClick={() => setActiveCategory('all')}
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-white py-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center border border-gray-100 rounded-2xl p-8 shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Stay Updated</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter for the latest products, deals, and tips.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-grow px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button className="bg-gradient-to-r from-primary to-primary-dark text-white font-semibold px-6 py-3 rounded-full whitespace-nowrap hover:shadow-md transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
