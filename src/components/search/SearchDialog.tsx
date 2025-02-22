import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

// Mock product data
const products = [
    { id: 1, name: 'Slim Fit Jeans', category: 'Jeans', section: 'jeans' },
    { id: 2, name: 'Cargo Pants', category: 'Cargo', section: 'cargo' },
    { id: 3, name: 'Chino Trousers', category: 'Trousers', section: 'trousers' },
    { id: 4, name: 'Skinny Jeans', category: 'Jeans', section: 'jeans' },
    { id: 5, name: 'Wide Leg Trousers', category: 'Trousers', section: 'trousers' },
    { id: 6, name: 'Cargo Shorts', category: 'Cargo', section: 'cargo' },
]

export function SearchDialog() {
    const [searchQuery, setSearchQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [searchResults, setSearchResults] = useState<typeof products>([])
    const [hasSearched, setHasSearched] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([])
            setHasSearched(false)
        }
    }, [searchQuery])

    const handleSearch = (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault()
        }

        const trimmedQuery = searchQuery.trim()

        if (trimmedQuery === '') {
            setSearchResults([])
            setHasSearched(false)
            return
        }

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(trimmedQuery.toLowerCase())
        )

        setSearchResults(filteredProducts)
        setHasSearched(true)
    }

    const handleResultClick = (product: typeof products[0]) => {
        setIsOpen(false)
        navigate(`/${product.section}`, { state: { scrollTo: product.id } })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Search">
                    <Search className="h-5 w-5 " />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <form onSubmit={handleSearch} className="flex flex-col gap-4">
                    <div className="flex gap-2">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch()
                                }
                            }}
                            className=""
                            aria-label="Search products"
                        />
                        <Button type="button" variant="custom" onClick={handleSearch}>Search</Button>
                    </div>

                    {hasSearched && searchResults.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
                            <ul className="space-y-2">
                                {searchResults.map(product => (
                                    <li
                                        key={product.id}
                                        className="flex justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
                                        onClick={() => handleResultClick(product)}
                                    >
                                        <span>{product.name}</span>
                                        <span className="text-gray-500">{product.category}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {hasSearched && searchResults.length === 0 && (
                        <p className="text-gray-500">No results found for "{searchQuery.trim()}"</p>
                    )}
                </form>
            </DialogContent>
        </Dialog>
    )
}
