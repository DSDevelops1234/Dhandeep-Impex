import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'

const saleProducts = [
    {
        id: 1,
        name: 'Slim Fit Jeans',
        originalPrice: '₹2,999',
        salePrice: '₹1,999',
        discount: '33%',
        image: '/placeholder.svg',
        category: 'Jeans',
    },
    {
        id: 2,
        name: 'Classic Chinos',
        originalPrice: '₹2,499',
        salePrice: '₹1,749',
        discount: '30%',
        image: '/placeholder.svg',
        category: 'Trousers',
    },
    {
        id: 3,
        name: 'Cargo Pants',
        originalPrice: '₹3,299',
        salePrice: '₹2,309',
        discount: '30%',
        image: '/placeholder.svg',
        category: 'Cargo',
    },
    {
        id: 4,
        name: 'Straight Fit Jeans',
        originalPrice: '₹2,799',
        salePrice: '₹1,959',
        discount: '30%',
        image: '/placeholder.svg',
        category: 'Jeans',
    },
    {
        id: 5,
        name: 'Formal Trousers',
        originalPrice: '₹2,999',
        salePrice: '₹2,099',
        discount: '30%',
        image: '/placeholder.svg',
        category: 'Trousers',
    },
    {
        id: 6,
        name: 'Tapered Cargo Joggers',
        originalPrice: '₹3,499',
        salePrice: '₹2,449',
        discount: '30%',
        image: '/placeholder.svg',
        category: 'Cargo',
    },
]

export default function SalePage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Sale Items</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {saleProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
                                {product.discount} OFF
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <div className="flex items-center mb-2">
                                <p className="text-red-600 font-bold mr-2">{product.salePrice}</p>
                                <p className="text-gray-500 line-through text-sm">{product.originalPrice}</p>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                            {/* <Button className="w-full" onClick={() => addToCart(product)}>Add to Cart</Button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

