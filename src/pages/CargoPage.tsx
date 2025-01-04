import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'
import ClassicCargoPants from '../assets/images/ClassicCargoPants.png'
import SlimFitCargoTrousers from '../assets/images/SlimFitCargoTrousers.png'
import TacticalCargoPants from '../assets/images/TacticalCargoPants.png'
import RelaxedFiCargoShorts from '../assets/images/RelaxedFitCargoShorts.png'
import StretchCargoTrousers from '../assets/images/StretchCargoTrousers.png'
const cargoProducts = [
    {
        id: 1,
        name: 'Classic Cargo Pants',
        price: '₹999',
        image: ClassicCargoPants,
        colors: ['Olive', 'Khaki', 'Black'],
    },
    {
        id: 2,
        name: 'Slim Fit Cargo Trousers',
        price: '₹999',
        image: SlimFitCargoTrousers,
        colors: ['Navy', 'Grey', 'Brown'],
    },
    {
        id: 3,
        name: 'Tactical Cargo Pants',
        price: '₹999',
        image: TacticalCargoPants,
        colors: ['Black', 'Camo', 'Sand'],
    },
    {
        id: 4,
        name: 'Relaxed Fit Cargo Shorts',
        price: '₹999',
        image: RelaxedFiCargoShorts,
        colors: ['Beige', 'Olive', 'Blue'],
    },
    {
        id: 5,
        name: 'Convertible Cargo Pants',
        price: '₹999',
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
        colors: ['Khaki', 'Grey', 'Green'],
    },
    {
        id: 6,
        name: 'Stretch Cargo Trousers',
        price: '₹999',
        image: StretchCargoTrousers,
        colors: ['Black', 'Navy', 'Charcoal'],
    },
]

export default function CargoPage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-200 dark:bg-[#252529] dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-8">Cargo Pants Collection</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cargoProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                        <div className="relative aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">{product.name}</h2>
                            <p className="text-gray-600 mb-2 dark:text-gray-200">{product.price}</p>
                            <div className="flex space-x-2 mb-4">
                                {product.colors.map((color) => (
                                    <span key={color} className="text-sm text-gray-500 dark:text-gray-200">
                                        {color}
                                    </span>
                                ))}
                            </div>
                            <Button className="w-full" onClick={() => addToCart(product)} variant="custom">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

