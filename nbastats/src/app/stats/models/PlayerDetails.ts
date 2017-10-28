export class PlayerDetails {
  name: string;
  surname: string;
  dateofbirth: string;

  constructor(arr: any[]) {
    this.name = arr && arr[1]         || null;
    this.surname = arr && arr[2]      || null;
    this.dateofbirth = arr && arr[6]  || null;
  }
}