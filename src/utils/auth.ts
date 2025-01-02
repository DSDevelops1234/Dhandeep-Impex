interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isVerified: boolean;
}

// Mock database
// let users: User[] = [];
const users: User[] = [];
let currentUser: User | null = null;

export const register = async (name: string, email: string, password: string, captchaToken: string): Promise<User> => {
    // Simulate captcha verification
    await verifyCaptcha(captchaToken);

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        throw new Error('Email already exists');
    }

    // Create new user
    const newUser: User = {
        id: users.length + 1,
        name,
        email,
        password, // In a real app, you'd hash this password
        isVerified: false,
    };
    users.push(newUser);

    // Simulate sending verification email
    await sendVerificationEmail(email);

    return newUser;
};

export const login = async (email: string, password: string): Promise<User> => {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        throw new Error('Invalid email or password');
    }
    if (!user.isVerified) {
        throw new Error('Please verify your email before logging in');
    }
    currentUser = user;
    return user;
};

// Simulate captcha verification
const verifyCaptcha = async (token: string): Promise<void> => {
    // In a real app, you'd call the captcha service API here
    await new Promise(resolve => setTimeout(resolve, 500));
    if (token !== 'valid_token') {
        throw new Error('Invalid captcha');
    }
};

// Simulate sending verification email
const sendVerificationEmail = async (email: string): Promise<void> => {
    // In a real app, you'd send an actual email here
    console.log(`Verification email sent to ${email}`);
    await new Promise(resolve => setTimeout(resolve, 500));
};

// Simulate email verification
// export const verifyEmail = async (token: string): Promise<void> => {
export const verifyEmail = async (token: string): Promise<void> => {
    // In a real app, you'd verify the token and update the user in the database
    const user = users.find(u => !u.isVerified);
    if (user) {
        user.isVerified = true;
    } else {
        throw new Error('Invalid verification token');
    }
};

export const logout = (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            currentUser = null;
            resolve();
        }, 500); // Simulate network delay
    });
};

export const getCurrentUser = (): User | null => {
    return currentUser;
};

