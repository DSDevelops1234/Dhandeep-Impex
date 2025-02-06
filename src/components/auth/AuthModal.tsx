import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User } from 'lucide-react'
// import { register, login, logout, getCurrentUser, verifyEmail } from '@/utils/auth'
import { register, login, logout, getCurrentUser } from '@/utils/auth'

export function AuthModal() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState(getCurrentUser())

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const confirmPassword = formData.get('confirm-password') as string

        if (password !== confirmPassword) {
            setError('Passwords do not match')
            setIsLoading(false)
            return
        }

        try {
            await register(name, email, password, confirmPassword)
            setIsSuccess(true)
            setError('Please check your email to verify your account')
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)
        setError(null)

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        try {
            const user = await login(email, password)
            setCurrentUser(user)
            setIsSuccess(true)
            setTimeout(() => {
                setIsOpen(false)
                setIsSuccess(false)
            }, 1500)
        } catch (err) {
            setError((err as Error).message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleLogout = async () => {
        await logout()
        setCurrentUser(null)
        setIsOpen(false)
    }

    const resetState = () => {
        setIsLoading(false)
        setIsSuccess(false)
        setError(null)
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open)
            if (!open) resetState()
        }}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="User account">
                    {currentUser ? (
                        <span className="text-sm font-medium">{currentUser.name.charAt(0)}</span>
                    ) : (
                        <User className="h-5 w-5" />
                    )}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-[#252529]">
                {currentUser ? (
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Welcome, {currentUser.name}!</h2>
                        <Button onClick={handleLogout} variant="custom">
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Tabs defaultValue="login" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="login" onClick={resetState}>Login</TabsTrigger>
                            <TabsTrigger value="register" onClick={resetState}>Register</TabsTrigger>
                        </TabsList>
                        <TabsContent value="login">
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" placeholder="Enter your password" required />
                                </div>
                                <Button type="submit" className="w-full" disabled={isLoading} variant="custom">
                                    {isLoading ? 'Logging in...' : 'Login'}
                                </Button>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                {isSuccess && <p className="text-green-500 text-sm">Login successful!</p>}
                            </form>
                        </TabsContent>
                        <TabsContent value="register">
                            <form onSubmit={handleRegister} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input id="name" name="name" type="text" placeholder="Enter your full name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" name="password" type="password" placeholder="Create a password" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">Confirm Password</Label>
                                    <Input id="confirm-password" name="confirm-password" type="password" placeholder="Confirm your password" required />
                                </div>
                                <Button type="submit" className="w-full" disabled={isLoading} variant="custom">
                                    {isLoading ? 'Registering...' : 'Register'}
                                </Button>
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                {isSuccess && <p className="text-green-500 text-sm">Registration successful! Please check your email.</p>}
                            </form>
                        </TabsContent>
                    </Tabs>
                )}
            </DialogContent>
        </Dialog>
    )
}
