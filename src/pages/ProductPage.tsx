import { useParams } from 'react-router-dom'

const products = [
    { id: 1, name: 'Slim Fit Jeans', category: 'Jeans', slug: 'slim-fit-jeans', description: 'Comfortable slim fit jeans for everyday wear.' },
    { id: 2, name: 'Cargo Pants', category: 'Cargo', slug: 'cargo-pants', description: 'Versatile cargo pants with multiple pockets.' },
    { id: 3, name: 'Chino Trousers', category: 'Trousers', slug: 'chino-trousers', description: 'Classic chino trousers for a smart casual look.' },
    { id: 4, name: 'Skinny Jeans', category: 'Jeans', slug: 'skinny-jeans', description: 'Trendy skinny jeans for a modern silhouette.' },
    { id: 5, name: 'Wide Leg Trousers', category: 'Trousers', slug: 'wide-leg-trousers', description: 'Stylish wide leg trousers for a relaxed fit.' },
    { id: 6, name: 'Cargo Shorts', category: 'Cargo', slug: 'cargo-shorts', description: 'Comfortable cargo shorts for warm weather.' },
]

export default function ProductPage() {
    const { slug } = useParams<{ slug: string }>()
    const product = products.find(p => p.slug === slug)

    if (!product) {
        return <div className="container mx-auto px-4 py-8">Product not found</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">Category: {product.category}</p>
            <p className="text-gray-800">{product.description}</p>
        </div>
    )
}