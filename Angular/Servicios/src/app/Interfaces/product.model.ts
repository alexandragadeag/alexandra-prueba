import { Rating } from "./rating.models";

export interface Product {
    id: number;
    title: string;
    price: number;
    descriptiton: string;
    category: string;
    image: string;
    rating: Rating;

}