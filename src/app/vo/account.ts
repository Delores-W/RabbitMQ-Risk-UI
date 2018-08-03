export class Account {
  id: number;
  account: string;
  status: string;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
