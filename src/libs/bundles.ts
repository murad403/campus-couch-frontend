import { StaticImageData } from "next/image";
import livingRoom from "@/assets/bundles/living.jpg";  
import bedRoom from "@/assets/bundles/bed.jpg";  
import diningRoom from "@/assets/bundles/dining.jpg";  

export type TBundle = {
    id: number;
    title: string;
    image: StaticImageData;
    feature: string[],
    rating: number;
    rent: number;
    price: number;
    description: string;
}

export const bundles: TBundle[] = [
    {id: 1, title: "Living Room", image: livingRoom, feature: ["Sofa (2-seater or 3-seater options)", "Coffee table", "TV stand", "Rug"], rating: 4, rent: 50, price: 150, description: "Transform your dining space with our Modern Wooden Dining Table Set, designed for durability, elegance, and comfort. Crafted from high-quality solid oak wood, this set includes a spacious table and four cushioned chairs, making it perfect for family meals or gatherings. The sleek design and premium finish blend seamlessly with any interior."},
    {id: 2, title: "Bed Room", image: bedRoom, feature: ["Sofa (2-seater or 3-seater options)", "Coffee table", "TV stand", "Rug"], rating: 4, rent: 50, price: 150, description: "Transform your dining space with our Modern Wooden Dining Table Set, designed for durability, elegance, and comfort. Crafted from high-quality solid oak wood, this set includes a spacious table and four cushioned chairs, making it perfect for family meals or gatherings. The sleek design and premium finish blend seamlessly with any interior."},
    {id: 3, title: "Dining Room", image: diningRoom, feature: ["Sofa (2-seater or 3-seater options)", "Coffee table", "TV stand", "Rug"], rating: 4, rent: 50, price: 150, description: "Transform your dining space with our Modern Wooden Dining Table Set, designed for durability, elegance, and comfort. Crafted from high-quality solid oak wood, this set includes a spacious table and four cushioned chairs, making it perfect for family meals or gatherings. The sleek design and premium finish blend seamlessly with any interior."},
]