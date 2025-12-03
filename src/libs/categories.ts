import table from "@/assets/categories/table.png";
import bad from "@/assets/categories/bad.png";
import bookself from "@/assets/categories/bookself.png";
import chaire from "@/assets/categories/chaire.png";
import wardrop from "@/assets/categories/wardrop.png";
import { StaticImageData } from "next/image";

export type TCategories = {
    title: string;
    image: StaticImageData;
}

export const categories: TCategories[] = [
    {title: "table", image: table},
    {title: "bad", image: bad},
    {title: "bookself", image: bookself},
    {title: "chaire", image: chaire},
    {title: "wardrop", image: wardrop},
]
