import chair from "@/assets/products/chair.png"
import table from "@/assets/products/table.png"
import bed from "@/assets/products/bed.png"
import { StaticImageData } from "next/image";

export type TProduct = {
    name: string;
    image: StaticImageData;
    rent: number;
    price: number;
}

export const products: TProduct[] = [
    {name: "chair", image: chair, rent: 14, price: 150},
    {name: "table", image: table, rent: 17, price: 160},
    {name: "bed", image: bed, rent: 34, price: 350},
    {name: "chair", image: chair, rent: 34, price: 394},
    {name: "table", image: table, rent: 45, price: 342},
    {name: "bed", image: bed, rent: 43, price: 354},
    {name: "chair", image: chair, rent: 65, price: 775},
    {name: "table", image: table, rent: 21, price: 150},
    {name: "bed", image: bed, rent: 34, price: 342},
]