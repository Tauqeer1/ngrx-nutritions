import { FoodNutritionsNgrxPage } from './app.po';

describe('food-nutritions-ngrx App', () => {
  let page: FoodNutritionsNgrxPage;

  beforeEach(() => {
    page = new FoodNutritionsNgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
