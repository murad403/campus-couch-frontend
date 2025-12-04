import chair from "@/assets/products/chair.png"
import table from "@/assets/products/table.png"
import bed from "@/assets/products/bed.png"
import { StaticImageData } from "next/image";

export type TProduct = {
    name: string;
    image: StaticImageData;
    rent: number;
    price: number;
    rating: number;
    description: string;
}

export const products: TProduct[] = [
    {name: "chair", image: chair, rent: 14, price: 150, rating: 4, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "table", image: table, rent: 17, price: 160, rating: 5, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "bed", image: bed, rent: 34, price: 350, rating: 4, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "chair", image: chair, rent: 34, price: 394, rating: 3, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "table", image: table, rent: 45, price: 342, rating: 4, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "bed", image: bed, rent: 43, price: 354, rating: 5, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "chair", image: chair, rent: 65, price: 775, rating: 4, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "table", image: table, rent: 21, price: 150, rating: 3, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
    {name: "bed", image: bed, rent: 34, price: 342, rating: 5, description: 'Upgrade your space with the Comfi Table, designed for modern living. Whether for studying, working, dining, or relaxing, this sleek and sturdy table fits seamlessly into any setting.'},
]