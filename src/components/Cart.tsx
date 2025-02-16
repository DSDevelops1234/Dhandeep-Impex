import { useShop } from '@/contexts/ShopContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ShoppingBag } from 'lucide-react';

export function Cart() {
    const { cart, removeFromCart } = useShop(); // ✅ Properly using cart

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Shopping cart">
                    <ShoppingBag className="h-5 w-5" />
                    {cart.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                            {cart.length}
                        </span>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </Button>
                            </div>
                        ))}
                        <Button className="w-full">Proceed to Checkout</Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
