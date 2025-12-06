import { StaticImageData } from "next/image";
import livingRoom from "@/assets/bundles/living.jpg";  
import bedRoom from "@/assets/bundles/bed.jpg";  
import diningRoom from "@/assets/bundles/dining.jpg";  

export type TBundle = {
    id: number;
    title: string;
    image: StaticImageData;
}

export const bundles: TBundle[] = [
    {id: 1, title: "Living Room", image: livingRoom},
    {id: 2, title: "Bed Room", image: bedRoom},
    {id: 3, title: "Dining Room", image: diningRoom},
]