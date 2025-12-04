import { StaticImageData } from "next/image";
import profile from "@/assets/products/bed.png";

export type TReview = {
    id: number;
    name: string;
    image: StaticImageData;
    message: string;
    date: string;
    rating: number;
}

export const reviews: TReview[] = [
    {
        id: 1,
        name: "Md Murad",
        image: profile,
        message: "Absolutely love this table! The wood quality is excellent, and the chairs are super comfy. It fits perfectly in my dining space!",
        date: "02 February, 2025",
        rating: 4
    },
    {
        id: 2,
        name: "Md Murad",
        image: profile,
        message: "Absolutely love this table! The wood quality is excellent, and the chairs are super comfy. It fits perfectly in my dining space!",
        date: "02 February, 2025",
        rating: 3
    },
    {
        id: 3,
        name: "Md Murad",
        image: profile,
        message: "Absolutely love this table! The wood quality is excellent, and the chairs are super comfy. It fits perfectly in my dining space!",
        date: "02 February, 2025",
        rating: 5
    },
]