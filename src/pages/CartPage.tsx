import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function BagTab() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Your Bag</h2>
            <p>Bag content goes here...</p>
        </div>
    );
}

function AddressTab() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Your Address</h2>
            <p>Address content goes here...</p>
        </div>
    );
}

function PaymentTab() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Payment Details</h2>
            <p>Payment content goes here...</p>
        </div>
    );
}

export default function CartPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Tabs Navigation */}
            <div className="tabs mb-4 flex space-x-4 border-b">
                <NavLink
                    to="cart"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-500 font-bold pb-2"
                            : "text-gray-600 pb-2"
                    }
                >
                    Bag
                </NavLink>
                <NavLink
                    to="address"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-500 font-bold pb-2"
                            : "text-gray-600 pb-2"
                    }
                >
                    Address
                </NavLink>
                <NavLink
                    to="payment"
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-2 border-blue-500 text-blue-500 font-bold pb-2"
                            : "text-gray-600 pb-2"
                    }
                >
                    Payment
                </NavLink>
            </div>
            {/* Tab Content using nested routes */}
            <div className="tab-content mt-6">
                <Routes>
                    {/* Default to the Bag tab */}
                    <Route path="/" element={<Navigate to="cart" replace />} />
                    <Route path="cart" element={<BagTab />} />
                    <Route path="address" element={<AddressTab />} />
                    <Route path="payment" element={<PaymentTab />} />
                </Routes>
            </div>
        </div>
    );
}
