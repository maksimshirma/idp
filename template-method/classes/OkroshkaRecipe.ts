import { SoupRecipe } from "./SoupRecipe";

export class OkroshkaRecipe extends SoupRecipe {
  constructor() {
    super();
  }

  protected prepareIngredients(): void {
    console.log('Подготовили продукты для окрошки')
  }

  protected cook(): void {
    console.log('Намешали окрошку')
  }

  protected season(): void {
    console.log('Добавили приправы в окрошку')
  }
}