// src/contexts/ShopContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react'

type Product = {
    id: number
    name: string
    price: string
    image: string
    description?: string
    category?: string
    colors?: string[]
    details?: string[]
    disclaimer?: string
    sizeFit?: string[]
    lookDescription?: string
    manufacturer?: string
    contact?: string
    origin?: string
}

type ShopContextType = {
    isModalOpen: boolean
    selectedProduct: Product | null
    selectedSize: string | null
    cart: Product[]
    openProductModal: (product: Product) => void
    closeProductModal: () => void
    selectSize: (size: string) => void
    addToCart: (product: Product, size?: string | null) => void
    removeFromCart: (id: number) => void
    handleBuyNow: (product: Product, size?: string | null) => void

    // NEW: Auth + Wishlist
    isLoggedIn: boolean
    wishlist: Product[]
    addToWishlist: (product: Product) => void
    removeFromWishlist: (id: number) => void
}

const ShopContext = createContext<ShopContextType | null>(null)

export function ShopProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [cart, setCart] = useState<Product[]>([])

    // ----------------------------------------
    // Simple auth + wishlist logic
    // In real app, you might replace isLoggedIn with your real auth check
    // or store it in an AuthContext.
    // ----------------------------------------
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoggedIn] = useState(false)
    const [wishlist, setWishlist] = useState<Product[]>([])

    // -----------
    // Modal logic
    // -----------
    const openProductModal = (product: Product) => {
        setSelectedProduct(product)
        setIsModalOpen(true)
        setSelectedSize(null)
    }

    const closeProductModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null)
        setSelectedSize(null)
    }

    const selectSize = (size: string) => {
        setSelectedSize(size)
    }

    // -----------
    // Cart logic
    // -----------
    const addToCart = (product: Product, size: string | null = null) => {
        setCart([...cart, product])
        console.log('Added to cart:', product, 'Size:', size)
        closeProductModal()
    }

    const removeFromCart = (id: number) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const handleBuyNow = (product: Product, size: string | null = null) => {
        console.log('Buy Now:', product, 'Size:', size)
        closeProductModal()
    }

    // -----------------
    // Wishlist logic
    // -----------------
    const addToWishlist = (product: Product) => {
        // Only add if not already in wishlist
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id)
            if (!exists) {
                return [...prev, product]
            }
            return prev
        })
    }

    const removeFromWishlist = (id: number) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id))
    }

    return (
        <ShopContext.Provider
            value={{
                isModalOpen,
                selectedProduct,
                selectedSize,
                cart,
                openProductModal,
                closeProductModal,
                selectSize,
                addToCart,
                removeFromCart,
                handleBuyNow,

                // NEW
                isLoggedIn,
                wishlist,
                addToWishlist,
                removeFromWishlist
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => {
    const context = useContext(ShopContext)
    if (!context) {
        throw new Error('useShop must be used within ShopProvider')
    }
    return context
}
