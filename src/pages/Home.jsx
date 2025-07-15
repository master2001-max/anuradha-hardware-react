import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { products } from '../data/products';

export default function Home() {
    const featuredProducts = products.slice(0, 8); // Show only 8 featured products

    return (
        <div className="bg-gray-50 text-gray-800 font-sans antialiased">
            <Navbar />
            <HeroSection />

            {/* Featured Products Section */}
            <section className="px-4 sm:px-6 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4 text-sm">
                            Premium Selection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
                                Featured Products
                            </span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our handpicked collection of high-quality tools and hardware designed to elevate your work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                className="hover:scale-[1.02] transition-transform duration-300"
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <a
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            View All Products
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="bg-gradient-to-r from-primary to-primary-dark py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center text-white mb-16">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Products?</h3>
                        <p className="text-lg opacity-90 max-w-3xl mx-auto">
                            We combine quality craftsmanship with innovative design to deliver tools that professionals trust.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Premium Quality</h4>
                            <p className="text-white/80">Every product meets our rigorous standards for durability and performance.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Best Value</h4>
                            <p className="text-white/80">Competitive pricing without compromising on quality or features.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-3">Secure Checkout</h4>
                            <p className="text-white/80">Your payment information is processed securely and encrypted.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/5 to-primary-dark/5 p-12 rounded-3xl">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Upgrade Your Toolkit?</h3>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Join thousands of professionals who trust our products for their most demanding projects.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="/shop"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Shop Now
                        </a>
                        <a
                            href="/product-details"
                            className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 font-semibold text-lg px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}