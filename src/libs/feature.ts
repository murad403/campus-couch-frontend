import { StaticImageData } from "next/image";
import image1 from "@/assets/feature/image1.png";
import image2 from "@/assets/feature/image2.png";
import image3 from "@/assets/feature/image3.png";
import image4 from "@/assets/feature/image4.png";

export type TFeature = {
    title: string;
    description: string;
    image: StaticImageData;
}

export const feautures: TFeature[] = [
    {title: "Students Browse & Select", description: "Choose your favorite furniture effortlessly.", image: image1},
    {title: "We Deliver & Set Up", description: "Quick delivery with hassle-free installation.", image: image2},
    {title: "Seamless Service", description: "Relax and make your space feel like home.", image: image3},
    {title: "A Space You'll Love", description: "We leave, leaving your space stylish and cozy.", image: image4},
]