// TrousersPage.tsx

// import { useShop } from '@/contexts/ShopContext'
// import SlimFitDressTrouser from '../assets/images/SlimFitDressTrouser.png'
// import { Button } from "@/components/ui/button"
// const trouserProducts = [
//     {
//         id: 1,
//         name: 'Classic Fit Chinos',
//         price: '₹2,299',
//         image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
//         colors: ['Khaki', 'Navy', 'Olive'],
//     },
//     {
//         id: 2,
//         name: 'Slim Fit Dress Trousers',
//         price: '₹2,799',
//         image: SlimFitDressTrouser,
//         colors: ['Black', 'Charcoal', 'Light Grey'],
//     },
//     {
//         id: 3,
//         name: 'Relaxed Fit Linen Trousers',
//         price: '₹2,499',
//         image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80',
//         colors: ['Beige', 'White', 'Light Blue'],
//     },
//     {
//         id: 4,
//         name: 'Tapered Fit Cotton Trousers',
//         price: '₹2,199',
//         image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//         colors: ['Navy', 'Khaki', 'Burgundy'],
//     },
//     {
//         id: 5,
//         name: 'Pleated Front Wool Trousers',
//         price: '₹3,299',
//         image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
//         colors: ['Charcoal', 'Navy', 'Brown'],
//     },
//     {
//         id: 6,
//         name: 'Stretch Comfort Trousers',
//         price: '₹2,599',
//         image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
//         colors: ['Black', 'Navy', 'Grey'],
//     },
// ]
// const TrousersPage = () => {
//     const { openProductModal } = useShop()
//     return (
//         <div className="container mx-auto px-4 py-8 dark:dark:bg-[#252529] dark:text-gray-200">
//             <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//                 {trouserProducts.map((product) => (
//                     <div
//                         key={product.id}
//                         onClick={() => openProductModal(product)}
//                         className="bg-white rounded-lg shadow-2xl overflow-hidden dark:bg-gray-900 cursor-pointer hover:shadow-xl transition-shadow"
//                     >
//                         <div className="relative aspect-[3/4]">
//                             <img
//                                 src={product.image}
//                                 alt={product.name}
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="p-4">
//                             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//                             <p className="text-gray-600 mb-2 dark:text-gray-300">{product.price}</p>
//                             <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">{product.colors}</p>
//                             <Button className="w-full" variant="custom">Add to Cart</Button>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     )
// }

// export default TrousersPage

import { useShop } from '@/contexts/ShopContext';
import SlimFitDressTrouser from '../assets/images/SlimFitDressTrouser.png';
import { Button } from '@/components/ui/button';
import ProductModal from '@/components/ProductModal'; // Import the modal

const trouserProducts = [
    {
        id: 1,
        name: 'Classic Fit Chinos',
        price: '₹2,299',
        image:
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
        colors: ['Khaki', 'Navy', 'Olive'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
    {
        id: 2,
        name: 'Slim Fit Dress Trousers',
        price: '₹2,799',
        image: SlimFitDressTrouser,
        colors: ['Black', 'Charcoal', 'Light Grey'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
    {
        id: 3,
        name: 'Relaxed Fit Linen Trousers',
        price: '₹2,499',
        image:
            'https://images.unsplash.com/photo-1584865288642-42078afe6942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1987&q=80',
        colors: ['Beige', 'White', 'Light Blue'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
    {
        id: 4,
        name: 'Tapered Fit Cotton Trousers',
        price: '₹2,199',
        image:
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        colors: ['Navy', 'Khaki', 'Burgundy'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
    {
        id: 5,
        name: 'Pleated Front Wool Trousers',
        price: '₹3,299',
        image:
            'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        colors: ['Charcoal', 'Navy', 'Brown'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
    {
        id: 6,
        name: 'Stretch Comfort Trousers',
        price: '₹2,599',
        image:
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
        colors: ['Black', 'Navy', 'Grey'],
        details: [
            'Slim Fit Dark Wash Jeans',
            'Tapered fit',
            'Brand Fit: smart',
            'Mid-rise',
            'Pattern: Solid'
        ],
        disclaimer: 'These trousers have been paired with the belt for styling purposes only.',
        sizeFit: ['Tapered fit', 'Brand Fit: smart', 'Mid-rise'],
        lookDescription: 'Perfectly balanced between smart and casual',
        manufacturer: 'DHANDEEP IMPEX, Ahmedabad',
        contact: 'Phone - +91 9414353246\nEmail- ddsuiting.bhl@gmail.com',
        origin: 'India'
    },
];

const TrousersPage = () => {
    const { openProductModal } = useShop();
    return (
        <div className="container mx-auto px-4 py-8 dark:dark:bg-[#252529] dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {trouserProducts.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => openProductModal(product)}
                        className="bg-white rounded-lg shadow-2xl overflow-hidden dark:bg-gray-900 cursor-pointer hover:shadow-xl transition-shadow"
                    >
                        <div className="relative aspect-[3/4]">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2 dark:text-gray-300">{product.price}</p>
                            <p className="text-sm text-gray-500 mb-4 dark:text-gray-400">
                                {product.colors.join(', ')}
                            </p>
                            <Button className="w-full" variant="custom">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <ProductModal />
        </div>
    );
};

export default TrousersPage;
