import { CategoryModel } from "./category.modul";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    description: string;
    category: CategoryModel;
}
export interface CreateProductDto extends Omit<ProductModel, "id" | "category" > {
    categoryId:number;//traer un atributo
}

//partial la actualizacion puede ser completa o parcial.
export interface UpdateProductDto extends Partial<ProductModel> {
    categoryId?:number;
}