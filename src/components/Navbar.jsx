import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-extrabold text-primary">Anuradha Hardware</h1>
                <div className="space-x-4 hidden md:block">
                    <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
                    <Link to="/shop" className="text-gray-700 hover:text-primary font-medium">Shop</Link>
                    <Link to="/cart" className="text-gray-700 hover:text-primary font-medium">Cart</Link>
                </div>
            </div>
        </nav>
    );
}
