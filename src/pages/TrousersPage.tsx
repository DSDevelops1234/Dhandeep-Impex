import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'

const trouserProducts = [
    {
        id: 1,
        name: 'Classic Fit Chinos',
        price: '₹2,299',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
        colors: ['Khaki', 'Navy', 'Olive'],
    },
    {
        id: 2,
        name: 'Slim Fit Dress Trousers',
        price: '₹2,799',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
        colors: ['Black', 'Charcoal', 'Light Grey'],
    },
    {
        id: 3,
        name: 'Relaxed Fit Linen Trousers',
        price: '₹2,499',
        image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80',
        colors: ['Beige', 'White', 'Light Blue'],
    },
    {
        id: 4,
        name: 'Tapered Fit Cotton Trousers',
        price: '₹2,199',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        colors: ['Navy', 'Khaki', 'Burgundy'],
    },
    {
        id: 5,
        name: 'Pleated Front Wool Trousers',
        price: '₹3,299',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        colors: ['Charcoal', 'Navy', 'Brown'],
    },
    {
        id: 6,
        name: 'Stretch Comfort Trousers',
        price: '₹2,599',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        colors: ['Black', 'Navy', 'Grey'],
    },
]

export default function TrousersPage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Trousers Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trouserProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.price}</p>
                            <div className="flex space-x-2 mb-4">
                                {product.colors.map((color) => (
                                    <span key={color} className="text-sm text-gray-500">
                                        {color}
                                    </span>
                                ))}
                            </div>
                            <Button className="w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

