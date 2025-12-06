import { StaticImageData } from "next/image";
import image1 from "@/assets/feature/image1.png";
import image2 from "@/assets/feature/image2.png";
import image3 from "@/assets/feature/image3.png";
import image4 from "@/assets/feature/image4.png";

export type TWorkFlow = {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

export const workFlows: TWorkFlow[] = [
    {id: 1, title: "Free Delivery", description: "Fast & Free Delivery on all orders! No hidden charges.", image: image1},
    {id: 2, title: "Free Setup", description: "We assemble your furniture for free, so you don’t have to.", image: image2},
    {id: 3, title: "Flexible options", description: "Own it forever or rent it for as long as you need.", image: image3},
    {id: 4, title: "Easy Student Resale", description: "Students can list and sell used furniture with a few clicks.", image: image4},
]