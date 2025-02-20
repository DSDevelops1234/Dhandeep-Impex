// // ProductModal.tsx

// import { useShop } from '@/contexts/ShopContext';
// import { useEffect, useState } from 'react';
// import { useToast } from '@/hooks/use-toast';
// import { useNavigate } from 'react-router-dom';

// const sizes = Array.from({ length: 6 }, (_, i) => 28 + i * 2).map(String);

// type AccordionSection = {
//     title: string;
//     content: string | string[] | JSX.Element;
//     format?: 'list' | 'paragraph' | 'uppercase';
// };

// export default function ProductModal() {
//     const {
//         isModalOpen,
//         selectedProduct,
//         selectedSize,
//         closeProductModal,
//         selectSize,
//         addToCart,
//         handleBuyNow,
//     } = useShop();
//     const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
//     const { toast } = useToast();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (isModalOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'auto';
//         }

//         return () => {
//             document.body.style.overflow = 'auto';
//         };
//     }, [isModalOpen]);

//     if (!isModalOpen || !selectedProduct) return null;

//     // Build the accordion sections dynamically
//     const accordionSections: AccordionSection[] = [
//         {
//             title: 'Product Details',
//             content: selectedProduct.details || [],
//             format: 'list',
//         },
//         {
//             title: 'Disclaimer',
//             content: selectedProduct.disclaimer || '',
//             format: 'paragraph',
//         },
//         {
//             title: 'Size & Fit',
//             content: selectedProduct.sizeFit || [],
//             format: 'list',
//         },
//         {
//             title: 'Complete the Look',
//             content: selectedProduct.lookDescription || '',
//             format: 'paragraph',
//         },
//         {
//             title: 'Manufacturer Details',
//             content: selectedProduct.manufacturer || '',
//             format: 'uppercase',
//         },
//         {
//             title: 'Contact',
//             content: selectedProduct.contact || '',
//             format: 'paragraph',
//         },
//         {
//             title: 'Country of Origin',
//             content: selectedProduct.origin || '',
//             format: 'uppercase',
//         },
//     ];

//     const renderContent = (section: AccordionSection) => {
//         if (!section.content) return null;

//         switch (section.format) {
//             case 'list':
//                 return (
//                     <ul className="list-disc pl-4 text-sm mt-2">
//                         {(section.content as string[]).map((item, index) => (
//                             <li key={index}>{item}</li>
//                         ))}
//                     </ul>
//                 );
//             case 'uppercase':
//                 return <p className="uppercase text-sm">{section.content}</p>;
//             default:
//                 return <p className="text-sm">{section.content}</p>;
//         }
//     };

//     const handleBuyNowClick = () => {
//         if (!selectedSize) {
//             toast({
//                 title: "Select a size first",
//                 description: "Please choose a size before proceeding to buy.",
//                 variant: "destructive",
//                 style: { backgroundColor: 'white' },
//             });
//             return;
//         }
//         handleBuyNow(selectedProduct, selectedSize);
//         navigate('/BuyNowPage');
//     };

//     return (
//         <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
//             onClick={closeProductModal}
//         >
//             <div
//                 className="bg-white dark:bg-gray-900 rounded-lg flex max-w-3xl w-full h-[90vh] overflow-hidden"
//                 onClick={(e) => e.stopPropagation()}
//             >
//                 {/* Left Side – Product Image */}
//                 <div className="w-1/2 p-6 h-full">
//                     <div className="h-full overflow-hidden rounded-lg">
//                         <img
//                             src={selectedProduct.image}
//                             alt={selectedProduct.name}
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Right Side – Product Details */}
//                 <div className="w-1/2 p-6 flex flex-col overflow-y-auto">
//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-bold dark:text-white">
//                             {selectedProduct.name}
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-300">
//                             {selectedProduct.description || 'Product description'}
//                         </p>

//                         {/* Size selection */}
//                         <div className="space-y-2">
//                             <h3 className="font-semibold dark:text-white">Select Size</h3>
//                             <div className="flex flex-wrap gap-2">
//                                 {sizes.map((size) => (
//                                     <button
//                                         key={size}
//                                         onClick={() => selectSize(size)}
//                                         className={`px-4 py-2 rounded ${selectedSize === size
//                                             ? 'bg-denim-500 text-white'
//                                             : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
//                                             }`}
//                                     >
//                                         {size}
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Action buttons */}
//                         <div className="flex gap-4 py-4">
//                             <button
//                                 onClick={handleBuyNowClick}
//                                 className="bg-denim-500 text-white px-6 py-2 rounded flex-1"
//                             >
//                                 Buy Now
//                             </button>
//                             <button
//                                 onClick={() => addToCart(selectedProduct, selectedSize)}
//                                 className="border-2 border-denim-500 text-denim-500 px-6 py-2 rounded flex-1 dark:text-white"
//                             >
//                                 Add to Cart
//                             </button>
//                         </div>

//                         {/* Accordion for product information */}
//                         <div
//                             className="border-t pt-4 overflow-y-auto max-h-60"
//                             style={{
//                                 overflowY: 'scroll',
//                                 scrollbarWidth: 'none',
//                                 WebkitOverflowScrolling: 'touch',
//                                 msOverflowStyle: 'none',
//                             }}
//                         >
//                             <div
//                                 className="flex justify-between items-center cursor-pointer"
//                                 onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
//                             >
//                                 <h3 className="font-semibold dark:text-white">Product Information</h3>
//                                 <span className="text-xl">{isDisclaimerOpen ? '−' : '+'}</span>
//                             </div>
//                             {isDisclaimerOpen && (
//                                 <div className="pt-4 space-y-6">
//                                     {accordionSections.map((section, index) =>
//                                         section.content ? (
//                                             <div key={index}>
//                                                 <p className="font-extrabold text-sm mb-2">
//                                                     {section.title}
//                                                 </p>
//                                                 {section.title === 'Disclaimer' ? (
//                                                     <div className="max-h-40 overflow-y-auto">
//                                                         {renderContent(section)}
//                                                     </div>
//                                                 ) : (
//                                                     renderContent(section)
//                                                 )}
//                                             </div>
//                                         ) : null
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useShop } from '@/contexts/ShopContext';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const sizes = Array.from({ length: 6 }, (_, i) => 28 + i * 2).map(String);

type AccordionSection = {
    title: string;
    content: string | string[] | JSX.Element;
    format?: 'list' | 'paragraph' | 'uppercase';
};

export default function ProductModal() {
    const {
        isModalOpen,
        selectedProduct,
        selectedSize,
        closeProductModal,
        selectSize,
        addToCart,
        handleBuyNow,
    } = useShop();
    const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);

    if (!isModalOpen || !selectedProduct) return null;

    const accordionSections: AccordionSection[] = [
        {
            title: 'Product Details',
            content: selectedProduct.details || [],
            format: 'list',
        },
        {
            title: 'Disclaimer',
            content: selectedProduct.disclaimer || '',
            format: 'paragraph',
        },
        {
            title: 'Size & Fit',
            content: selectedProduct.sizeFit || [],
            format: 'list',
        },
        {
            title: 'Complete the Look',
            content: selectedProduct.lookDescription || '',
            format: 'paragraph',
        },
        {
            title: 'Manufacturer Details',
            content: selectedProduct.manufacturer || '',
            format: 'uppercase',
        },
        {
            title: 'Contact',
            content: selectedProduct.contact || '',
            format: 'paragraph',
        },
        {
            title: 'Country of Origin',
            content: selectedProduct.origin || '',
            format: 'uppercase',
        },
    ];

    const renderContent = (section: AccordionSection) => {
        if (!section.content) return null;
        switch (section.format) {
            case 'list':
                return (
                    <ul className="list-disc pl-4 text-sm mt-2">
                        {(section.content as string[]).map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                );
            case 'uppercase':
                return <p className="uppercase text-sm">{section.content}</p>;
            default:
                return <p className="text-sm">{section.content}</p>;
        }
    };

    const handleBuyNowClick = () => {
        if (!selectedSize) {
            toast({
                title: 'Select a size first',
                description: 'Please choose a size before proceeding to buy.',
                variant: 'destructive',
                style: { backgroundColor: 'white' },
            });
            return;
        }
        handleBuyNow(selectedProduct, selectedSize);
        navigate('/BuyNowPage', {
            state: { product: { ...selectedProduct, size: selectedSize } },
        });
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeProductModal}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-lg flex max-w-3xl w-full h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side – Product Image */}
                <div className="w-1/2 p-6 h-full">
                    <div className="h-full overflow-hidden rounded-lg">
                        <img
                            src={selectedProduct.image}
                            alt={selectedProduct.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Right Side – Product Details */}
                <div className="w-1/2 p-6 flex flex-col overflow-y-auto">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold dark:text-white">
                            {selectedProduct.name}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            {selectedProduct.description || 'Product description'}
                        </p>

                        {/* Size selection */}
                        <div className="space-y-2">
                            <h3 className="font-semibold dark:text-white">Select Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => selectSize(size)}
                                        className={`px-4 py-2 rounded ${selectedSize === size
                                            ? 'bg-denim-500 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-4 py-4">
                            <button
                                onClick={handleBuyNowClick}
                                className="bg-denim-500 text-white px-6 py-2 rounded flex-1"
                            >
                                Buy Now
                            </button>
                            <button
                                onClick={() => addToCart(selectedProduct, selectedSize)}
                                className="border-2 border-denim-500 text-denim-500 px-6 py-2 rounded flex-1 dark:text-white"
                            >
                                Add to Cart
                            </button>
                        </div>

                        {/* Accordion for product information */}
                        <div
                            className="border-t pt-4 overflow-y-auto max-h-60"
                            style={{
                                overflowY: 'scroll',
                                scrollbarWidth: 'none',
                                WebkitOverflowScrolling: 'touch',
                                msOverflowStyle: 'none',
                            }}
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
                            >
                                <h3 className="font-semibold dark:text-white">Product Information</h3>
                                <span className="text-xl">{isDisclaimerOpen ? '−' : '+'}</span>
                            </div>
                            {isDisclaimerOpen && (
                                <div className="pt-4 space-y-6">
                                    {accordionSections.map((section, index) =>
                                        section.content ? (
                                            <div key={index}>
                                                <p className="font-extrabold text-sm mb-2">{section.title}</p>
                                                {section.title === 'Disclaimer' ? (
                                                    <div className="max-h-40 overflow-y-auto">
                                                        {renderContent(section)}
                                                    </div>
                                                ) : (
                                                    renderContent(section)
                                                )}
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
