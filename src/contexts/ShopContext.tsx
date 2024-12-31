import React, { createContext, useContext, useState, ReactNode } from 'react'

interface Product {
    id: number
    name: string
    price: string
    image: string
}

interface ShopContextType {
    cart: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: number) => void
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export const useShop = () => {
    const context = useContext(ShopContext)
    if (context === undefined) {
        throw new Error('useShop must be used within a ShopProvider')
    }
    return context
}

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Product[]>([])

    const addToCart = (product: Product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    return (
        <ShopContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    )
}

