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


export type TAboutFeature = {
    id: number; 
    title: string;
    description: string;
}

export const aboutFeatures: TAboutFeature[] = [
    {id: 1, title: "Flexible Buy & Rent Options", description: "Choose between buying or renting furniture based on your needs. Whether you need it for the short term or long term, we offer flexible solutions to match your lifestyle."},
    {id: 2, title: "Exclusive Bundle Deals", description: "Furnish your entire room with our curated combo packages for living rooms, bedrooms, and dining spaces—making it easier and more affordable to set up your home."},
    {id: 3, title: "Fast Delivery & Free Setup", description: "Furnish your entire room with our curated combo packages for living rooms, bedrooms, and dining spaces—making it easier and more affordable to set up your home."},
    {id: 4, title: "Student Marketplace", description: "Students can sell their own furniture directly through our platform, allowing them to earn money while making furniture accessible for others."},
]