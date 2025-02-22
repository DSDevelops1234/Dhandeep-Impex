// src/pages/WishlistPage.tsx

import { useShop } from '@/contexts/ShopContext'

export default function WishlistPage() {
    const { wishlist, removeFromWishlist } = useShop()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wishlist.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-2xl overflow-hidden"
                        >
                            <div className="relative aspect-[3/4]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                                <p className="text-gray-600 mb-2">{product.price}</p>
                                {product.category && (
                                    <p className="text-sm text-gray-500 mb-4">
                                        {product.category}
                                    </p>
                                )}

                                {/* Example "Move to bag" or remove button */}
                                <button
                                    onClick={() => removeFromWishlist(product.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
