import { StaticImageData } from "next/image";
import image from "@/assets/products/chair.png";

export type TOrder = {
    id: number;
    orderNumber: string;
    date: string;
    status: 'Pending' | 'Processing' | 'Approved' | 'Cancelled';
    total: number;
    name: string;
    color: string;
    shippingAddress: string;
    image: StaticImageData;
}

export const orders: TOrder[] = [
    {
        id: 1,
        orderNumber: 'ORD123456',
        date: 'Feb 21, 2025',
        status: 'Pending',
        total: 150.00,
        name: 'Modern Chair',
        color: 'Red',
        shippingAddress: '123 Main St, Springfield, IL 62701',
        image: image,
    },
    {
        id: 2,
        orderNumber: 'ORD123457',
        date: 'Feb 21, 2025', 
        status: 'Approved',
        total: 250.00,
        name: 'Wooden Table',
        color: 'Brown',
        shippingAddress: '456 Oak St, Springfield, IL 62701',
        image: image,
    },
    {
        id: 3,
        orderNumber: 'ORD123458',
        date: 'Feb 21, 2025',
        status: 'Cancelled',
        total: 300.00,
        name: 'Leather Sofa',
        color: 'Black',
        shippingAddress: '789 Pine St, Springfield, IL 62701',
        image: image,
    }
]