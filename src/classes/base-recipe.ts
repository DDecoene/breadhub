
import { IRecipe } from "../interfaces/i-recipe";
import { Ingredient } from "./ingredient";

export default class BaseRecipe implements IRecipe {
    id: number = 0;
    name: string = "";
    description: string = "";
    ingredients: Ingredient[] = [];
    unitOfMeasure: string = "gram";
}