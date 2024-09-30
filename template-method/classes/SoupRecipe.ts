export abstract class SoupRecipe {
  constructor() {}

  protected abstract prepareIngredients(): void;
  protected abstract cook(): void;
  protected abstract season(): void;

  protected serve(): void {
    console.log('Подали суп');
  }

  prepareSoup(): void {
    this.prepareIngredients();
    this.cook();
    this.season();
    this.serve();
  }
}