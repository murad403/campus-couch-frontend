import image from "@/assets/products/bed.png"
import { StaticImageData } from "next/image";

export type TCart = {
    id: number;
    name: string;
    material: string;
    color: string;
    price: number;
    quantity: number;
    image: StaticImageData;
}

export const cartItems: TCart[] = [
    {
        id: 1,
        name: "Willey chair",
        material: "Wooden", 
        color: "Orange",
        price: 120,
        quantity: 1,
        image: image,
    }
]