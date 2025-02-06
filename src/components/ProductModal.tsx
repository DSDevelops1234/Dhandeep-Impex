// ProductModal.tsx
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
    const [errorMessage, setErrorMessage] = useState('');
    const { addToCart } = useShop();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
        setErrorMessage(''); // Clear the error message when a size is selected
    };

    const handleAddToCart = () => {
        console.log('Add to Cart clicked'); // Debugging
        if (!selectedSize) {
            console.log('No size selected'); // Debugging
            toast.error('Please select a size before adding to cart');
            return;
        }

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
    };

    const handleBuyNowClick = () => {
        if (!selectedSize) {
            setErrorMessage('Please select a size first.');
            console.log('Error Message:', 'Please select a size first.'); // Debugging
        } else {
            navigate('/buynowpage', { state: { product: { ...product, size: selectedSize } } });
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
                                        onClick={() => handleSizeSelect(size)}
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
                        {/* Error message displayed here */}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <div className="space-y-2">
                            <Button
                                onClick={handleAddToCart}
                                className="w-full"
                                disabled={!selectedSize}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                onClick={handleBuyNowClick}
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