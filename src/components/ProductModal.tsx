// import { useState } from 'react';
// import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { useShop } from '@/contexts/ShopContext';
// import { useToast } from "@/components/ui/use-toast"

// interface Product {
//     id: number;
//     name: string;
//     price: string;
//     image: string;
//     description: string;
//     sizes: string[];
// }

// interface CartProduct extends Omit<Product, 'sizes'> {
//     size: string; // Add a required size property
// }

// interface ProductModalProps {
//     product: Product;
// }

// export function ProductModal({ product }: ProductModalProps) {
//     const [selectedSize, setSelectedSize] = useState<string | null>(null);
//     const { addToCart } = useShop();
//     const [isOpen, setIsOpen] = useState(false);

//     const handleAddToCart = () => {
//         if (selectedSize) {
//             const cartProduct: CartProduct = {
//                 id: product.id,
//                 name: product.name,
//                 price: product.price,
//                 image: product.image,
//                 description: product.description,
//                 size: selectedSize, // Add selected size
//             };
//             addToCart(cartProduct);
//             setIsOpen(false);
//         }
//     };
//     const handleBuyNow = () => {
//         if (selectedSize) {
//             const cartProduct: CartProduct = {
//                 id: product.id,
//                 name: product.name,
//                 price: product.price,
//                 image: product.image,
//                 description: product.description,
//                 size: selectedSize,
//             };
//             addToCart(cartProduct);
//             // Implement checkout logic here
//             setIsOpen(false);
//         }
//     };

//     return (
//         <Dialog open={isOpen} onOpenChange={setIsOpen}>
//             <DialogTrigger asChild>
//                 <div className="cursor-pointer transition-all duration-300 hover:shadow-lg">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-64 object-cover rounded-t-lg"
//                     />
//                     <div className="p-4 bg-white dark:bg-dark-secondary rounded-b-lg">
//                         <h3 className="text-lg font-semibold">{product.name}</h3>
//                         <p className="text-gray-600">{product.price}</p>
//                     </div>
//                 </div>
//             </DialogTrigger>
//             {/* <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white dark:bg-dark-background"> */}
//             <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white dark:bg-[#252529] dark:border-none dark:text-white">
//                 <div className="flex flex-col md:flex-row">
//                     <div className="md:w-1/2">
//                         <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                     <div className="md:w-1/2 p-6 space-y-4">
//                         <h2 className="text-2xl font-bold">{product.name}</h2>
//                         <p className="text-xl font-semibold">{product.price}</p>
//                         <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
//                             <div className="flex space-x-2">
//                                 {product.sizes.map((size) => (
//                                     <Button
//                                         key={size}
//                                         variant={selectedSize === size ? 'default' : 'border'}
//                                         onClick={() => setSelectedSize(size)}
//                                         className="dark:text-white"
//                                     >
//                                         {size}
//                                     </Button>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="space-y-2">
//                             <Button
//                                 onClick={handleAddToCart}
//                                 className="w-full"
//                                 disabled={!selectedSize}
//                                 variant="custom"
//                             >
//                                 Add to Cart
//                             </Button>
//                             <Button
//                                 onClick={handleBuyNow}
//                                 className="w-full"
//                                 disabled={!selectedSize}
//                                 variant="custom"
//                             >
//                                 Buy Now
//                             </Button>
//                         </div>
//                         <div className="border-t pt-4 mt-4">
//                             <h3 className="text-lg font-semibold mb-2">Return Policy:</h3>
//                             <p className="text-sm text-gray-600 dark:text-gray-300">
//                                 We offer a 2-day return policy for all unworn items in their original condition.
//                                 Please see our full return policy for more details.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </DialogContent>
//         </Dialog>

//     );
// }


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useShop } from '@/contexts/ShopContext';
import { toast } from 'react-hot-toast';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
    sizes: string[];
}

interface CartProduct extends Omit<Product, 'sizes'> {
    size: string; // Add a required size property
}

interface ProductModalProps {
    product: Product;
}

export function ProductModal({ product }: ProductModalProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { addToCart, isLoggedIn } = useShop();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (selectedSize) {
            const cartProduct: CartProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                description: product.description,
                size: selectedSize,
            };
            addToCart(cartProduct);
            toast.success(`${product.name} (Size: ${selectedSize}) added to cart`);
            setIsOpen(false);
        } else {
            toast.error('Please select a size before adding to cart');
        }
    };

    const handleBuyNow = () => {
        if (selectedSize) {
            if (isLoggedIn) {
                const cartProduct: CartProduct = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    description: product.description,
                    size: selectedSize,
                };
                addToCart(cartProduct);
                navigate('/purchase', { state: { product: cartProduct } });
            } else {
                toast.error('Please log in or sign up to continue');
                navigate('/auth', { state: { returnTo: '/purchase' } });
            }
            setIsOpen(false);
        } else {
            toast.error('Please select a size before proceeding to buy');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <div className="cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="p-4 bg-white dark:bg-dark-secondary rounded-b-lg">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white dark:bg-[#252529] dark:border-none dark:text-white">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-6 space-y-4">
                        <h2 className="text-2xl font-bold">{product.name}</h2>
                        <p className="text-xl font-semibold">{product.price}</p>
                        <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Select Size:</h3>
                            <div className="flex space-x-2">
                                {product.sizes.map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? 'default' : 'outline'}
                                        onClick={() => setSelectedSize(size)}
                                        className={
                                            selectedSize === size
                                                ? 'bg-primary text-white'
                                                : 'border dark:border-gray-700 dark:text-white'
                                        }
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Button
                                onClick={handleAddToCart}
                                className="w-full"
                                disabled={!selectedSize}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                onClick={handleBuyNow}
                                className="w-full"
                                disabled={!selectedSize}
                            >
                                Buy Now
                            </Button>
                        </div>
                        <div className="border-t pt-4 mt-4">
                            <h3 className="text-lg font-semibold mb-2">Return Policy:</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                We offer a 30-day return policy for all unworn items in their original condition.
                                Please see our full return policy for more details.
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

