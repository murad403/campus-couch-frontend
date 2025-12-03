import { StaticImageData } from "next/image";
import facebook from "@/assets/footer/facebook.png";
import instagram from "@/assets/footer/instagram.png";
import linkedin from "@/assets/footer/linkedin.png";
import twitter from "@/assets/footer/twitter.png";


export type TSocial = {
    link: string;
    image: StaticImageData
}

export const socialLinks: TSocial[] = [
    {link: "https://portfolio-mybook-next-js.vercel.app/", image: facebook},
    {link: "https://portfolio-mybook-next-js.vercel.app/", image: instagram},
    {link: "https://portfolio-mybook-next-js.vercel.app/", image: linkedin},
    {link: "https://portfolio-mybook-next-js.vercel.app/", image: twitter},
]