export interface ISearchResult {
  id: string;
  name: string;
}

export class SearchResult implements ISearchResult {
  id: string;
  name: string;
  constructor(obj?: any) {
    console.log('obj', obj);
    this.id = obj.ndbno || '';
    this.name = obj.name || '';

  }
}
