// CargoPage.tsx
// import { Button } from '@/components/ui/button'
// import { useShop } from '@/contexts/ShopContext'
// import ClassicCargoPants from '../assets/images/ClassicCargoPants.png'
// import SlimFitCargoTrousers from '../assets/images/SlimFitCargoTrousers.png'
// import TacticalCargoPants from '../assets/images/TacticalCargoPants.png'
// import RelaxedFiCargoShorts from '../assets/images/RelaxedFitCargoShorts.png'
// import StretchCargoTrousers from '../assets/images/StretchCargoTrousers.png'
// const cargoProducts = [
//     {
//         id: 1,
//         name: 'Classic Cargo Pants',
//         price: '₹999',
//         image: ClassicCargoPants,
//         colors: ['Olive', 'Khaki', 'Black'],
//     },
//     {
//         id: 2,
//         name: 'Slim Fit Cargo Trousers',
//         price: '₹999',
//         image: SlimFitCargoTrousers,
//         colors: ['Navy', 'Grey', 'Brown'],
//     },
//     {
//         id: 3,
//         name: 'Tactical Cargo Pants',
//         price: '₹999',
//         image: TacticalCargoPants,
//         colors: ['Black', 'Camo', 'Sand'],
//     },
//     {
//         id: 4,
//         name: 'Relaxed Fit Cargo Shorts',
//         price: '₹999',
//         image: RelaxedFiCargoShorts,
//         colors: ['Beige', 'Olive', 'Blue'],
//     },
//     {
//         id: 5,
//         name: 'Convertible Cargo Pants',
//         price: '₹999',
//         image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
//         colors: ['Khaki', 'Grey', 'Green'],
//     },
//     {
//         id: 6,
//         name: 'Stretch Cargo Trousers',
//         price: '₹999',
//         image: StretchCargoTrousers,
//         colors: ['Black', 'Navy', 'Charcoal'],
//     },
// ]

// const CargoPage = () => {
//     const { openProductModal } = useShop()
//     return (
//         <div className="container mx-auto px-4 py-8 bg-gray-200 dark:bg-[#252529] dark:text-gray-200">
//             <h1 className="text-3xl font-bold mb-8">Cargo Pants Collection</h1>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {cargoProducts.map((product) => (
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
//                             <div className="absolute top-2 left-2 bg-denim-500 text-white px-2 py-1 text-xs rounded">
//                                 New
//                             </div>
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

// export default CargoPage

import { Button } from '@/components/ui/button';
import { useShop } from '@/contexts/ShopContext';
import ClassicCargoPants from '../assets/images/ClassicCargoPants.png';
import SlimFitCargoTrousers from '../assets/images/SlimFitCargoTrousers.png';
import TacticalCargoPants from '../assets/images/TacticalCargoPants.png';
import RelaxedFiCargoShorts from '../assets/images/RelaxedFitCargoShorts.png';
import StretchCargoTrousers from '../assets/images/StretchCargoTrousers.png';
import ProductModal from '@/components/ProductModal'; // Import the modal

const cargoProducts = [
    {
        id: 1,
        name: 'Classic Cargo Pants',
        price: '₹999',
        image: ClassicCargoPants,
        colors: ['Olive', 'Khaki', 'Black'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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
        name: 'Slim Fit Cargo Trousers',
        price: '₹999',
        image: SlimFitCargoTrousers,
        colors: ['Navy', 'Grey', 'Brown'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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
        name: 'Tactical Cargo Pants',
        price: '₹999',
        image: TacticalCargoPants,
        colors: ['Black', 'Camo', 'Sand'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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
        name: 'Relaxed Fit Cargo Shorts',
        price: '₹999',
        image: RelaxedFiCargoShorts,
        colors: ['Beige', 'Olive', 'Blue'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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
        name: 'Convertible Cargo Pants',
        price: '₹999',
        image:
            'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1997&q=80',
        colors: ['Khaki', 'Grey', 'Green'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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
        name: 'Stretch Cargo Trousers',
        price: '₹999',
        image: StretchCargoTrousers,
        colors: ['Black', 'Navy', 'Charcoal'],
        description: 'Premium stretch denim with mid-rise waist and tapered leg',
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

const CargoPage = () => {
    const { openProductModal } = useShop();
    return (
        <div className="container mx-auto px-4 py-8 bg-gray-200 dark:bg-[#252529] dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-8">Cargo Pants Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cargoProducts.map((product) => (
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
                            <div className="absolute top-2 left-2 bg-denim-500 text-white px-2 py-1 text-xs rounded">
                                New
                            </div>
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

export default CargoPage;
