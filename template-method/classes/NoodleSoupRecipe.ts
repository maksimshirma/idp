import { SoupRecipe } from "./SoupRecipe";

export class NoodleSoupRecipe extends SoupRecipe {
  constructor() {
    super();
  }

  protected prepareIngredients(): void {
    console.log('Подготовили продукты для лапши')
  }

  protected cook(): void {
    console.log('Сварили лапшу')
  }

  protected season(): void {
    console.log('Добавили приправы в лапшу')
  }
}