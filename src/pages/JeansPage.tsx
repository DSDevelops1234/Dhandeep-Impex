import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'

const jeansProducts = [
    {
        id: 1,
        name: 'Slim Fit Dark Wash Jeans',
        price: '₹2,499',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
        fits: ['Slim', 'Regular', 'Relaxed'],
    },
    {
        id: 2,
        name: 'Straight Fit Light Wash Jeans',
        price: '₹2,299',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        fits: ['Straight', 'Regular', 'Relaxed'],
    },
    {
        id: 3,
        name: 'Skinny Fit Black Jeans',
        price: '₹2,699',
        image: 'https://images.unsplash.com/photo-1618352319006-c22d99ae48e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        fits: ['Skinny', 'Super Skinny'],
    },
    {
        id: 4,
        name: 'Bootcut Medium Wash Jeans',
        price: '₹2,599',
        image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        fits: ['Bootcut', 'Regular'],
    },
    {
        id: 5,
        name: 'Tapered Fit Raw Denim Jeans',
        price: '₹3,299',
        image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
        fits: ['Tapered', 'Slim'],
    },
    {
        id: 6,
        name: 'Relaxed Fit Distressed Jeans',
        price: '₹2,799',
        image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
        fits: ['Relaxed', 'Regular'],
    },
]

export default function JeansPage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Jeans Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jeansProducts.map((product) => (
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
                            <div className="flex flex-wrap gap-2 mb-4">
                                {product.fits.map((fit) => (
                                    <span key={fit} className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {fit}
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

