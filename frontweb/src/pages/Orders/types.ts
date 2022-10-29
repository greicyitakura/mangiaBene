export type Product = {
    [x: string]: any;
    id: number;
    name: string;
    price: number;
    description: string;
    imageURI: string;
}

export type OrderLocationdata = {
    latitude: number;
    longitude: number;
    address: string;
}