export interface Product {
    id: string;
    name: string;
    price: number;
    // ...existing properties...
    size?: string; // Add this line to include the size property
}
