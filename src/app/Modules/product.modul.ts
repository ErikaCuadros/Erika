import { CategoryModel } from "./category.modul";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    category: CategoryModel;
}