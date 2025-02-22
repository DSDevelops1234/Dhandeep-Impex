// src/pages/JeansPage.tsx

import { useShop } from '@/contexts/ShopContext'
import SkinnyFitJeansLandscape from '../assets/images/SkinnyFitJeansLandscape.png'
import ProductModal from '@/components/ProductModal'
import { Heart } from 'lucide-react'

const jeansProducts = [
  {
    id: 1,
    name: 'Slim Fit Dark Wash Jeans',
    price: '₹2,499',
    image:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
    category: 'Jeans',
    description:
      'Our Slim Fit Dark Wash Jeans offer a modern silhouette with a comfortable stretch fabric. Perfect for both casual and semi-formal occasions.',
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
    name: 'Straight Fit Light Wash Jeans',
    price: '₹2,299',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Jeans',
    description:
      "These Straight Fit Light Wash Jeans provide a classic look with a comfortable fit. Made from high-quality denim that's perfect for everyday wear.",
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
    name: 'Skinny Fit Black Jeans',
    price: '₹2,699',
    image: SkinnyFitJeansLandscape,
    category: 'Jeans',
    description:
      'Our Skinny Fit Black Jeans offer a sleek, modern look. The stretchy fabric ensures comfort while maintaining a sharp silhouette.',
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
    name: 'Bootcut Medium Wash Jeans',
    price: '₹2,599',
    image:
      'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Jeans',
    description:
      'These Bootcut Medium Wash Jeans combine classic style with modern comfort. The bootcut leg provides a balanced look, suitable for various occasions.',
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
    name: 'Tapered Fit Raw Denim Jeans',
    price: '₹3,299',
    image:
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    category: 'Jeans',
    description:
      'Our Tapered Fit Raw Denim Jeans are perfect for denim enthusiasts. Made from high-quality raw denim, these jeans will develop a unique patina over time.',
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
    name: 'Relaxed Fit Distressed Jeans',
    price: '₹2,799',
    image:
      'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    category: 'Jeans',
    description:
      'These Relaxed Fit Distressed Jeans offer a laid-back, casual look. The comfortable fit and distressed details make them perfect for a stylish, effortless outfit.',
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

export default function JeansPage() {
  const { openProductModal } = useShop()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Jeans Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jeansProducts.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => openProductModal(product)}
          >
            {/* Image */}
            <div className="relative aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product info that fades out on hover */}
            <div className="p-4 product-info transition-opacity group-hover:opacity-0">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <p className="text-sm text-gray-500 mb-4">
                {product.category}
              </p>
            </div>

            {/* Wishlist button that appears on hover */}
            <WishlistButton product={product} />
          </div>
        ))}
      </div>
      <ProductModal />
    </div>
  )
}

/** A reusable wishlist button for each product card */
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  details: string[];
  disclaimer: string;
  sizeFit: string[];
  lookDescription: string;
  manufacturer: string;
  contact: string;
  origin: string;
}

function WishlistButton({ product }: { product: Product }) {
  const { isLoggedIn, wishlist, addToWishlist, removeFromWishlist } = useShop()

  // Check if product is already in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Stop parent onClick (which opens the product modal)
    e.stopPropagation()

    if (!isLoggedIn) {
      // If user not logged in => show Auth Modal or do something
      // For example, you might call your <AuthModal> or set a state
      alert('You must log in first!')
      return
    }

    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        opacity-0 group-hover:opacity-100 transition-all 
        px-4 py-2 rounded flex items-center 
        ${isInWishlist
          ? 'bg-[#535766] text-white'
          : 'bg-white text-black hover:border hover:border-black'
        }
      `}
    >
      <Heart
        className="w-5 h-5"
        stroke={isInWishlist ? '#ff3f6c' : 'currentColor'}
        fill={isInWishlist ? '#ff3f6c' : 'none'}
      />
      <span className="ml-2">
        {isInWishlist ? 'Wishlisted' : 'Add to wishlist'}
      </span>
    </button>
  )
}
