"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type FilterValue = string[];

export default function Filter() {
    const [selectedTypes, setSelectedTypes] = useState<FilterValue>([""]);
    console.log("selectedTypes", selectedTypes);

    const types = ["Sofas & Couches", "Beds & Mattresses", "Dining Room", "Living Room", "Workspace & Office", "Kitchen & Storage"];
    const colors = ["Black", "Brown", "Gray", "White", "Beige", "Blue"];
    const sizes = ["Small", "Medium", "Large", "Extra Large"];
    const materials = ["Fabric", "Leather", "Wood", "Metal"];
    const prices = ["50", "100", "150", "200", "250", "300"];

    const handleCheckboxChange = (value: string, checked: boolean, setFn: (val: FilterValue) => void, current: FilterValue) => {
        if (checked) {
            setFn([...current, value]);
        } else {
            setFn(current.filter((item) => item !== value));
        }
    };

    return (
        <Accordion type="multiple" className="w-full space-y-2">

            {/* fot type filter */}
            <AccordionItem value="type">
                <AccordionTrigger className="text-title bg-[#F5F5F5] text-lg hover:no-underline py-3 px-5">
                    Type
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                    {types.map((type) => (
                        <div key={type} className="flex items-center space-x-3 px-4">
                            <Checkbox
                                id={type}
                                checked={selectedTypes.includes(type)}
                                onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(type, checked, setSelectedTypes, selectedTypes)
                                }
                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 border border-heading"
                            />
                            <Label
                                htmlFor={type}
                                className="text-description cursor-pointer text-sm font-normal leading-none"
                            >
                                {type}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>

            {/* for color filter */}
            <AccordionItem value="color">
                <AccordionTrigger className="text-title bg-[#F5F5F5] text-lg hover:no-underline py-3 px-5">
                    Color
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                    {colors.map((type) => (
                        <div key={type} className="flex items-center space-x-3 px-4">
                            <Checkbox
                                id={type}
                                checked={selectedTypes.includes(type)}
                                onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(type, checked, setSelectedTypes, selectedTypes)
                                }
                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 border border-heading"
                            />
                            <Label
                                htmlFor={type}
                                className="text-description cursor-pointer text-sm font-normal leading-none"
                            >
                                {type}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>

            {/* for price filter */}
            <AccordionItem value="price">
                <AccordionTrigger className="text-title bg-[#F5F5F5] text-lg hover:no-underline py-3 px-5">
                    Price
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                    {prices.map((type) => (
                        <div key={type} className="flex items-center space-x-3 px-4">
                            <Checkbox
                                id={type}
                                checked={selectedTypes.includes(type)}
                                onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(type, checked, setSelectedTypes, selectedTypes)
                                }
                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 border border-heading"
                            />
                            <Label
                                htmlFor={type}
                                className="text-description cursor-pointer text-sm font-normal leading-none"
                            >
                                {type}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>

            {/* for size filter */}
            <AccordionItem value="size">
                <AccordionTrigger className="text-title bg-[#F5F5F5] text-lg hover:no-underline py-3 px-5">
                    Size
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                    {sizes.map((type) => (
                        <div key={type} className="flex items-center space-x-3 px-4">
                            <Checkbox
                                id={type}
                                checked={selectedTypes.includes(type)}
                                onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(type, checked, setSelectedTypes, selectedTypes)
                                }
                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 border border-heading"
                            />
                            <Label
                                htmlFor={type}
                                className="text-description cursor-pointer text-sm font-normal leading-none"
                            >
                                {type}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>

            {/* for material filter */}
            <AccordionItem value="material">
                <AccordionTrigger className="text-title bg-[#F5F5F5] text-lg hover:no-underline py-3 px-5">
                    Material
                </AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                    {materials.map((type) => (
                        <div key={type} className="flex items-center space-x-3 px-4">
                            <Checkbox
                                id={type}
                                checked={selectedTypes.includes(type)}
                                onCheckedChange={(checked: boolean) =>
                                    handleCheckboxChange(type, checked, setSelectedTypes, selectedTypes)
                                }
                                className="data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500 border border-heading"
                            />
                            <Label
                                htmlFor={type}
                                className="text-description cursor-pointer text-sm font-normal leading-none"
                            >
                                {type}
                            </Label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}