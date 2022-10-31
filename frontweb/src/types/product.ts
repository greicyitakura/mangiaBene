import { Category } from "./category"

export type Product = {
    imageURI: string | undefined;
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    date: string;
    categories: Category[];
}