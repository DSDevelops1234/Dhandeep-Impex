import { Button } from '@/components/ui/button'
import { useShop } from '@/contexts/ShopContext'

const newProducts = [
    {
        id: 1,
        name: 'Slim Fit Dark Wash Jeans',
        price: '₹2,499',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
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
        name: 'Cargo Joggers',
        price: '₹2,799',
        image: 'https://images.unsplash.com/photo-1608236415053-3691791bbffe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
        category: 'Trousers',
    },
    {
        id: 6,
        name: 'Relaxed Fit Cargo Pants',
        price: '₹2,999',
        image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        category: 'Cargo',
    },
    {
        id: 7,
        name: 'Skinny Fit Black Jeans',
        price: '₹2,599',
        image: 'https://images.unsplash.com/photo-1618352319006-c22d99ae48e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {newProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                            <Button className="w-full" onClick={() => addToCart(product)}>Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

