import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'
import SlimFitJeans from '../assets/images/SlimFitJeans.png'
import ClassicChinoTrousers from '../assets/images/ClassicChinoTrousers.png'
import CargoTrouser from '../assets/images/CargoTrouser.png'
import StraightFitJeans from '../assets/images/StraightFitJeans.png'
import FormalTrouser from '../assets/images/FormalTrousers.png'
import TaperedCargoTrousers from '../assets/images/TaperedCargoTrousers.jpg'
const saleProducts = [
    {
        id: 1,
        name: 'Slim Fit Jeans',
        originalPrice: '₹2,999',
        price: '₹1499',
        salePrice: '₹999',
        discount: '33%',
        image: SlimFitJeans,
        category: 'Jeans',
    },
    {
        id: 2,
        name: 'Classic Chinos',
        price: '₹1599',
        salePrice: '₹1099',
        discount: '30%',
        image: ClassicChinoTrousers,
        category: 'Trousers',
    },
    {
        id: 3,
        name: 'Cargo Pants',
        price: '₹1799',
        salePrice: '₹1199',
        originalPrice: '₹1799',
        discount: '30%',
        image: CargoTrouser,
        category: 'Cargo',
    },
    {
        id: 4,
        name: 'Straight Fit Jeans',
        price: '₹1,959',
        salePrice: '₹1,199',
        originalPrice: '₹1799',
        discount: '30%',
        image: StraightFitJeans,
        category: 'Jeans',
    },
    {
        id: 5,
        name: 'Formal Trousers',
        originalPrice: '₹2,999',
        price: '₹1799',
        salePrice: '₹1199',
        discount: '30%',
        image: FormalTrouser,
        category: 'Trousers',
    },
    {
        id: 6,
        name: 'Tapered Cargo Joggers',
        originalPrice: '₹1799',
        price: '₹1799',
        salePrice: '₹1199',
        discount: '30%',
        image: TaperedCargoTrousers,
        category: 'Cargo',
    },
]

export default function SalePage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8 dark:bg-[#252529] dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-8">Sale Items</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {saleProducts.map((product) => (
                    <div key={product.id} className="bg-gray-200 rounded-lg shadow-2xl overflow-hidden">
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
                        <div className="p-4 dark:dark:bg-gray-800">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <div className="flex items-center mb-2">
                                <p className="text-red-600 font-bold mr-2">{product.salePrice}</p>
                                <p className="text-gray-500 line-through text-sm">{product.originalPrice}</p>
                            </div>
                            <p className="text-sm text-gray-500 mb-4 dark:text-gray-200">{product.category}</p>
                            <Button className="w-full" onClick={() => addToCart(product)} variant="custom">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}