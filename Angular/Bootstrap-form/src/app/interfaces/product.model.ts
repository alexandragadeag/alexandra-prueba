import { Category } from "./category.model";
import { Manufacturer } from "./manufacturer.model";

export interface Product {
    id: number;
    tittle: string;
    price: number;
    available: boolean;
    publishDate: Date;
    // Many To One
    manufacturer: Manufacturer;
    // Many To many
    categories: Category[];
}