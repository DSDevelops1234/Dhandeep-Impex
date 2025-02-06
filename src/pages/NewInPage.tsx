import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'
import SlimFitDarkWashJeans from '../assets/images/SlimFitDarkWashJeans.png'
import CargoTrouser from '../assets/images/CargoTrouser.png'
import SlimFitDressTrousers from '../assets/images/SlimFitDressTrouser.png'
import RelaxedFitCargoPants from '../assets/images/Relaxed Fit Cargo Pants.png'
import SkinnyFitBlackJeans from '../assets/images/SkinnyFitBlackJeans.png'
const newProducts = [
    {
        id: 1,
        name: 'Slim Fit Dark Wash Jeans',
        price: '₹2,499',
        image: SlimFitDarkWashJeans,
        category: 'Jeans',
    },
    {
        id: 2,
        name: 'Tapered Fit Chino Trousers',
        price: '₹2,299',
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        category: 'Trousers',
    },
    {
        id: 3,
        name: 'Cargo Trousers',
        price: '₹2,799',
        image: CargoTrouser,
        category: 'Cargo',
    },
    {
        id: 4,
        name: 'Straight Fit Light Wash Jeans',
        price: '₹2,399',
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        category: 'Jeans',
    },
    {
        id: 5,
        name: 'Slim Fit Dress Trousers',
        price: '₹2,699',
        image: SlimFitDressTrousers,
        category: 'Trousers',
    },
    {
        id: 6,
        name: 'Relaxed Fit Cargo Pants',
        price: '₹2,999',
        image: RelaxedFitCargoPants,
        category: 'Cargo',
    },
    {
        id: 7,
        name: 'Skinny Fit Black Jeans',
        price: '₹2,599',
        image: SkinnyFitBlackJeans,
        category: 'Jeans',
    },
    {
        id: 8,
        name: 'Pleated Front Trousers',
        price: '₹2,899',
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        category: 'Trousers',
    },
]

export default function NewInPage() {
    const { addToCart } = useShop()

    return (
        <div className="container mx-auto px-4 py-8 dark:bg-[#252529] dark:text-white ">
            <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {newProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-2xl overflow-hidden dark:bg-gray-900">
                        <div className="relative aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-denim-500 text-white px-2 py-1 text-xs rounded">
                                New
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.price}</p>
                            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                            <Button className="w-full" onClick={() => addToCart(product)} variant="custom">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}