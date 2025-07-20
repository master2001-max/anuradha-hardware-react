import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart({ cartItems, onRemoveItem, onClearCart }) {
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
            <Navbar />

            <section className="py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-10">Your Cart</h1>

                    {cartItems.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6">
                                {cartItems.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-6 bg-white shadow-sm rounded-xl p-6"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                            <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => onRemoveItem(item.id)}
                                                className="text-sm text-red-500 hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="bg-white shadow-sm rounded-xl p-6">
                                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Subtotal</span>
                                        <span>${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Shipping</span>
                                        <span className="text-sm text-gray-400">Calculated at checkout</span>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between text-lg font-semibold text-gray-900">
                                    <span>Total</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <button
                                    className="mt-6 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-full hover:shadow-lg transition"
                                    onClick={() => window.location.href = '/checkout'}
                                >
                                    Proceed to Checkout
                                </button>

                                <button
                                    onClick={onClearCart}
                                    className="mt-4 w-full text-sm text-red-500 hover:underline"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                            <p className="text-gray-600 mb-6">Looks like you haven’t added anything yet.</p>
                            <a
                                href="/shop"
                                className="inline-block bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition"
                            >
                                Shop Now
                            </a>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
