import React from 'react';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">Anuradha Hardware 🔧</h1>
            <ul className="flex gap-6 text-gray-700 font-medium">
                <li className="hover:text-blue-600 cursor-pointer">Home</li>
                <li className="hover:text-blue-600 cursor-pointer">Products</li>
                <li className="hover:text-blue-600 cursor-pointer">Cart</li>
                <li className="hover:text-blue-600 cursor-pointer">Login</li>
            </ul>
        </nav>
    );
}
