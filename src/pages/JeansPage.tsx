// import { useEffect, useRef } from 'react'
// import { useLocation } from 'react-router-dom'
// import { ProductModal } from '@/components/ProductModal'

// const jeansProducts = [
//   {
//     id: 1,
//     name: 'Slim Fit Dark Wash Jeans',
//     price: '₹2,499',
//     image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
//     description: 'Our Slim Fit Dark Wash Jeans offer a modern silhouette with a comfortable stretch fabric. Perfect for both casual and semi-formal occasions.',
//     sizes: ['32', '34', '36', '38'],
//   },
//   {
//     id: 2,
//     name: 'Straight Fit Light Wash Jeans',
//     price: '₹2,299',
//     image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
//     description: 'These Straight Fit Light Wash Jeans provide a classic look with a comfortable fit. Made from high-quality denim that\'s perfect for everyday wear.',
//     sizes: ['32', '34', '36', '38'],
//   },
//   {
//     id: 3,
//     name: 'Skinny Fit Black Jeans',
//     price: '₹2,699',
//     image: 'https://images.unsplash.com/photo-1618352319006-c22d99ae48e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
//     description: 'Our Skinny Fit Black Jeans offer a sleek, modern look. The stretchy fabric ensures comfort while maintaining a sharp silhouette.',
//     sizes: ['32', '34', '36', '38'],
//   },
//   {
//     id: 4,
//     name: 'Bootcut Medium Wash Jeans',
//     price: '₹2,599',
//     image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
//     description: 'These Bootcut Medium Wash Jeans combine classic style with modern comfort. The bootcut leg provides a balanced look, suitable for various occasions.',
//     sizes: ['32', '34', '36', '38'],
//   },
//   {
//     id: 5,
//     name: 'Tapered Fit Raw Denim Jeans',
//     price: '₹3,299',
//     image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
//     description: 'Our Tapered Fit Raw Denim Jeans are perfect for denim enthusiasts. Made from high-quality raw denim, these jeans will develop a unique patina over time.',
//     sizes: ['32', '34', '36', '38'],
//   },
//   {
//     id: 6,
//     name: 'Relaxed Fit Distressed Jeans',
//     price: '₹2,799',
//     image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
//     description: 'These Relaxed Fit Distressed Jeans offer a laid-back, casual look. The comfortable fit and distressed details make them perfect for a stylish, effortless outfit.',
//     sizes: ['32', '34', '36', '38'],
//   },
// ]

// export default function JeansPage() {
//   const location = useLocation()
//   const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

//   useEffect(() => {
//     if (location.state && location.state.scrollTo) {
//       const productId = location.state.scrollTo
//       const productElement = productRefs.current[productId]
//       if (productElement) {
//         productElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
//       }
//     }
//   }, [location])

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Jeans Collection</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {jeansProducts.map((product) => (
//           <div
//             key={product.id}
//             ref={el => productRefs.current[product.id] = el}
//           >
//             <ProductModal product={product} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ProductModal } from '@/components/ProductModal'

const jeansProducts = [
  {
    id: 1,
    name: 'Slim Fit Dark Wash Jeans',
    price: '₹2,499',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80',
    description: 'Our Slim Fit Dark Wash Jeans offer a modern silhouette with a comfortable stretch fabric. Perfect for both casual and semi-formal occasions.',
    sizes: ['32', '34', '36', '38'],

  },
  {
    id: 2,
    name: 'Straight Fit Light Wash Jeans',
    price: '₹2,299',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    description: 'These Straight Fit Light Wash Jeans provide a classic look with a comfortable fit. Made from high-quality denim that\'s perfect for everyday wear.',
    sizes: ['32', '34', '36', '38'],
  },
  {
    id: 3,
    name: 'Skinny Fit Black Jeans',
    price: '₹2,699',
    image: 'https://images.unsplash.com/photo-1618352319006-c22d99ae48e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Our Skinny Fit Black Jeans offer a sleek, modern look. The stretchy fabric ensures comfort while maintaining a sharp silhouette.',
    sizes: ['32', '34', '36', '38'],
  },
  {
    id: 4,
    name: 'Bootcut Medium Wash Jeans',
    price: '₹2,599',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    description: 'These Bootcut Medium Wash Jeans combine classic style with modern comfort. The bootcut leg provides a balanced look, suitable for various occasions.',
    sizes: ['32', '34', '36', '38'],
  },
  {
    id: 5,
    name: 'Tapered Fit Raw Denim Jeans',
    price: '₹3,299',
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    description: 'Our Tapered Fit Raw Denim Jeans are perfect for denim enthusiasts. Made from high-quality raw denim, these jeans will develop a unique patina over time.',
    sizes: ['32', '34', '36', '38'],
  },
  {
    id: 6,
    name: 'Relaxed Fit Distressed Jeans',
    price: '₹2,799',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    description: 'These Relaxed Fit Distressed Jeans offer a laid-back, casual look. The comfortable fit and distressed details make them perfect for a stylish, effortless outfit.',
    sizes: ['32', '34', '36', '38'],
  },
]

export default function JeansPage() {
  const location = useLocation()
  const productRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const productId = location.state.scrollTo
      const productElement = productRefs.current[productId]
      if (productElement) {
        productElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [location])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Jeans Collection</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jeansProducts.map((product) => (
          <div
            key={product.id}
            ref={el => productRefs.current[product.id] = el}
          >
            <ProductModal product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

