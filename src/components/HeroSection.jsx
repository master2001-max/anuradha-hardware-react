import React from 'react';

export default function HeroSection() {
    return (
        <section className="relative bg-cover bg-center h-[80vh]" style={{ backgroundImage: `url('/hero-image.jpg')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white px-4">
                    <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
                        Welcome to <span className="text-primary">Anuradha Hardware</span>
                    </h1>
                    <p className="text-lg mb-6">Your one-stop shop for quality tools and equipment.</p>
                    <a href="/shop" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition">
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
}
