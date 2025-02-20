// // src/components/Header/MainHeader.tsx

// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// // import { ShoppingBag, User, Menu } from 'lucide-react'
// import { ShoppingBag, Menu } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { AuthModal } from '@/components/auth/AuthModal'
// import { SearchDialog } from '@/components/search/SearchDialog'
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// // import { DarkModeToggle } from '@/components/DarkModeToggle'

// const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'New In', href: '/new-in' },
//     { name: 'Jeans', href: '/jeans' },
//     { name: 'Trousers', href: '/trousers' },
//     { name: 'Cargo', href: '/cargo' },
//     { name: 'Sale', href: '/sale', className: 'text-red-600 font-semibold' },
// ]

// export default function MainHeader() {
//     const [isScrolled, setIsScrolled] = useState(false)

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10)
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => window.removeEventListener('scroll', handleScroll)
//     }, [])

//     return (
//         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
//             <div className="container mx-auto px-4 ">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <Link to="/" className="text-sm sm:text-2xl font-bold text-navy-900">
//                         DHANDEEP IMPEX
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden md:flex space-x-8">
//                         {navigation.map((item) => (
//                             <Link
//                                 key={item.name}
//                                 to={item.href}
//                                 className={`text-gray-700 hover:text-navy-900 ${item.className || ''}`}
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </nav>

//                     {/* Actions*/}
//                     <div className="flex items-center space-x-4">
//                         {/* <DarkModeToggle /> */}
//                         <SearchDialog />
//                         <AuthModal />
//                         <Button variant="ghost" size="icon" aria-label="Shopping bag">
//                             <ShoppingBag className="h-5 w-5" />
//                         </Button>

//                         {/* Mobile Menu Button */}
//                         <Sheet>
//                             <SheetTrigger asChild>
//                                 <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
//                                     <Menu className="h-5 w-5" />
//                                 </Button>
//                             </SheetTrigger>
//                             <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-[#252529]">
//                                 <nav className="flex flex-col space-y-4 mt-8">
//                                     {navigation.map((item) => (
//                                         <Link
//                                             key={item.name}
//                                             to={item.href}
//                                             className={`text-lg font-medium ${item.className || ''}`}
//                                         >
//                                             {item.name}
//                                         </Link>
//                                     ))}
//                                 </nav>
//                             </SheetContent>
//                         </Sheet>
//                     </div>
//                 </div >
//             </div >
//         </header >
//     )
// }


import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuthModal } from '@/components/auth/AuthModal'
import { SearchDialog } from '@/components/search/SearchDialog'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'New In', href: '/new-in' },
    { name: 'Jeans', href: '/jeans' },
    { name: 'Trousers', href: '/trousers' },
    { name: 'Cargo', href: '/cargo' },
    { name: 'Sale', href: '/sale', className: 'text-red-600 font-semibold' },
]

export default function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-sm sm:text-2xl font-bold text-navy-900">
                        DHANDEEP IMPEX
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`text-gray-700 hover:text-navy-900 ${item.className || ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">
                        <SearchDialog />
                        <AuthModal />
                        {/* Shopping bag now links to the CartPage */}
                        <Link to="/checkoutpage/cart">
                            <Button variant="ghost" size="icon" aria-label="Shopping bag">
                                <ShoppingBag className="h-5 w-5" />
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white text-[#252529]">
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`text-lg font-medium ${item.className || ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
