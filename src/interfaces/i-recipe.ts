import { Ingredient } from "../classes/ingredient";

export interface IRecipe {
    id: number,
    name: string,
    description: string,
    ingredients: Ingredient[],
    unitOfMeasure: string, // TODO standardize to type
    dough_qty?: number,
    loaf_qty?: number
}