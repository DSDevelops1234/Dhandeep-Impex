

import { createContext, useContext, useState, ReactNode } from 'react'

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    description?: string;
    category?: string;
    colors?: string[];
    // Add these new fields
    details?: string[];
    disclaimer?: string;
    sizeFit?: string[];
    lookDescription?: string;
    manufacturer?: string;
    contact?: string;
    origin?: string;
};

type ShopContextType = {
    isModalOpen: boolean
    selectedProduct: Product | null
    selectedSize: string | null
    cart: Product[]
    openProductModal: (product: Product) => void
    closeProductModal: () => void
    selectSize: (size: string) => void
    addToCart: (product: Product, size?: string | null) => void  // made size optional
    removeFromCart: (id: number) => void
    handleBuyNow: (product: Product, size?: string | null) => void  // made size optional
}

const ShopContext = createContext<ShopContextType | null>(null)

export function ShopProvider({ children }: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [cart, setCart] = useState<Product[]>([])

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
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}

export const useShop = () => {
    const context = useContext(ShopContext)
    if (!context) throw new Error('useShop must be used within ShopProvider')
    return context
}
