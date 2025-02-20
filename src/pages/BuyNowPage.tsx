// // src/pages/BuyNowPage.tsx

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const BuyNowPage: React.FC = () => {
//     const location = useLocation();
//     const product = location.state?.product;

//     return (
//         <div className="container mx-auto px-4 py-8 dark:bg-[#252529] dark:text-gray-200">
//             <h1 className="text-3xl font-bold mb-8">Buy Now</h1>
//             {product ? (
//                 <div>
//                     <h2 className="text-2xl font-bold">{product.name}</h2>
//                     <p>{product.description}</p>
//                     <p className="text-xl font-bold">{product.price}</p>
//                     <p className="text-lg">Size: {product.size}</p>
//                     {/* Add more product details and purchase options here */}
//                 </div>
//             ) : (
//                 <p>No product selected.</p>
//             )}
//         </div>
//     );
// };

// export default BuyNowPage;

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BuyNowPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('BuyNowPage location:', location);
    const product = location.state?.product;

    useEffect(() => {
        if (!product) {
            console.warn('Product data is missing. Redirecting to home page.');
            navigate('/', { replace: true });
        }
    }, [product, navigate]);

    if (!product) {
        return <p>Redirecting...</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8 dark:bg-[#252529] dark:text-gray-200">
            <h1 className="text-3xl font-bold mb-8">Buy Now</h1>
            <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p>{product.description}</p>
                <p className="text-xl font-bold">{product.price}</p>
                <p className="text-lg">Size: {product.size}</p>
                {/* Add more product details and purchase options here */}
            </div>
        </div>
    );
};

export default BuyNowPage;
