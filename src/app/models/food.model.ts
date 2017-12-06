export interface INutrients {
  nutrientId: string;
  nutrient: string;
  unit: string;
  value: number;
  gm: number;
}

export interface IFood {
  id: string;
  name: string;
  nutrients: INutrients[];
}

export class Food implements IFood {
  id: string;
  name: string;
  nutrients: INutrients[];

  constructor(obj?: any) {
    this.id = obj.ndbno || '';
    this.name = obj.name || '';
    this.nutrients = obj.nutrients || [];
  }
}
