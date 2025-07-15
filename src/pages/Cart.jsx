import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart({ cartItems, onRemoveItem, onClearCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-12 flex-grow">
                <h1 className="text-3xl font-bold text-primary mb-6">Your Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-gray-600">Your cart is currently empty.</p>
                ) : (
                    <>
                        <div className="grid gap-6 mb-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between items-center bg-white shadow rounded p-4">
                                    <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                        <div>
                                            <h2 className="text-lg font-semibold">{item.name}</h2>
                                            <p className="text-gray-500">Qty: {item.quantity}</p>
                                            <p className="text-gray-700 font-medium">Rs. {item.price * item.quantity}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => onRemoveItem(item.id)}
                                        className="text-red-500 font-semibold hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="text-right text-xl font-bold text-gray-900 mb-6">
                            Total: Rs. {total}
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                onClick={onClearCart}
                                className="px-5 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                            >
                                Clear Cart
                            </button>
                            <button
                                className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
}
