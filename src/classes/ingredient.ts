import { IIngredient } from "../interfaces/i-ingredient";

export class Ingredient implements IIngredient {
    id: number = 0;
    name: string = "";
    percent: number = 0;
}