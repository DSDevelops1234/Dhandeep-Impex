import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Instagram, Facebook, Twitter } from 'lucide-react'
import { useShop } from '@/contexts/ShopContext'
// import { cn } from "@/lib/utils"
import Cargo2 from '../assets/images/Cargo2.png'
import ClassicChinoTrouser from '../assets/images/ClassicChinoTrousers.png'
import CargoTrouser from '../assets/images/CargoTrouser.png'
import StraightFitBlackJeans from '../assets/images/StraightFitBlackJeans.png'
import ThreeMan from '../assets/images/ThreeMan.png'
import Jeans from '../assets/images/Jeans.png'

const featuredCategories = [
    { name: 'Jeans', href: '/jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=926&q=80' },
    { name: 'Trousers', href: '/trousers', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Cargo', href: '/cargo', image: Cargo2 },
]

const newArrivals = [
    { id: 1, name: 'Slim Fit Blue Jeans', price: '₹949', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 2, name: 'Classic Chino Trousers', price: '₹949', image: ClassicChinoTrouser },
    { id: 3, name: 'Cargo Trousers', price: '₹949', image: CargoTrouser },
    { id: 4, name: 'Straight Fit Black Jeans', price: '₹949', image: StraightFitBlackJeans },
]

const galleryImages = [
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    Jeans,
    'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    'https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1009&q=80',
    ThreeMan
]

const processSteps = [
    { title: 'Choose Your Style', description: 'Browse our collection and find the perfect fit for you.' },
    { title: 'Customize Your Fit', description: 'Select your size and any additional customizations.' },
    { title: 'Place Your Order', description: 'Securely checkout and confirm your purchase.' },
    { title: 'Quick Delivery', description: 'Receive your new jeans or trousers at your doorstep.' },
]

const faqItems = [
    {
        question: 'What sizes do you offer?',
        answer: 'We offer sizes ranging from 28 to 40 for most of our products. Please check the size guide on each product page for specific measurements.'
    },
    {
        question: 'How do I care for my jeans?',
        answer: 'We recommend washing your jeans inside out in cold water and hanging them to dry. This helps preserve the color and fit of your jeans.'
    },
    {
        question: 'Do you offer international shipping?',
        answer: 'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination.'
    },
    {
        question: 'What is your return policy?',
        answer: 'We offer a 3-day return policy for unworn items in their original condition. Please visit our Returns page for more information.'
    },
]

export default function HomePage() {
    const { addToCart } = useShop()

    return (
        <div className="flex flex-col min-h-screen dark:bg-[#252529] dark:text-white">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center">
                <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 dark:bg-[#252529]/60" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-bold mb-6">Discover Your Perfect Fit</h1>
                        <p className="text-xl mb-8">
                            Explore our latest collection of premium jeans, trousers, and cargo pants crafted for style and comfort
                        </p>
                        {/* <Button asChild size="lg" className="bg-white text-navy-900 hover:bg-gray-100">
                            <Link to="/new-in">Shop New Arrivals</Link>
                        </Button> */}
                        <Button asChild size="lg" variant="dark" className="bg-white text-navy-900 hover:bg-gray-100">
                            <Link to="/new-in">Shop New Arrivals</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredCategories.map((category) => (
                            <Link key={category.name} to={category.href} className="group">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">{category.name}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Arrivals */}
            <section className="py-16 bg-gray-50 dark:bg-[#252529]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {newArrivals.map((product) => (
                            <div key={product.id} className="bg-gray-200 rounded-lg shadow-2xl overflow-hidden dark:bg-slate-800 dark:text-white">
                                <div className="relative aspect-square">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 mb-2">{product.price}</p>
                                    <Button className="w-full" variant="custom" onClick={() => addToCart(product)}>Add to Cart</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Button asChild variant="border">
                            <Link to="/new-in">View All New Arrivals</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Style Gallery</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {galleryImages.map((image, index) => (
                            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-navy-900 text-white dark:bg-dark-primary">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white text-navy-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-200 text-navy-900 dark:bg-navy-900 dark:text-white dark:bg-dark-primary py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">DENIMHUB</h3>
                            <p className="dark:text-gray-300">Premium jeans and trousers for every style.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/new-in" className="hover:text-black dark:hover:text-gray-300">New Arrivals</Link></li>
                                <li><Link to="/jeans" className="hover:text-black dark:hover:text-gray-300">Jeans</Link></li>
                                <li><Link to="/trousers" className="hover:text-black dark:hover:text-gray-300">Trousers</Link></li>
                                <li><Link to="/cargo" className="hover:text-black dark:hover:text-gray-300">Cargo</Link></li>
                                <li><Link to="/sale" className="hover:text-black dark:hover:text-gray-300">Sale</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
                            <ul className="space-y-2">
                                <li><Link to="#" className="hover:text-black dark:hover:text-gray-300">Contact Us</Link></li>
                                <li><Link to="#" className="hover:text-black dark:hover:text-gray-300">Shipping & Returns</Link></li>
                                <li><Link to="#" className="hover:text-black dark:hover:text-gray-300">Size Guide</Link></li>
                                <li><Link to="#" className="hover:text-black dark:hover:text-gray-300">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-gray-300"><Instagram className="w-6 h-6" /></a>
                                <a href="#" className="hover:text-gray-300"><Facebook className="w-6 h-6" /></a>
                                <a href="#" className="hover:text-gray-300"><Twitter className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 dark:text-gray-400">
                        <p>&copy; {new Date().getFullYear()} DENIMHUB. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}