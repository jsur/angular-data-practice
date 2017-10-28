export class Player {
  id: number;
  name: string;
  teamname: string;
  age: number;

  constructor(arr: any[]) {
    this.id = arr && arr[0]       || null;
    this.name = arr && arr[1]     || null;
    this.teamname = arr && arr[3] || null;
    this.age = arr && arr[4]      || null;
  }
}