export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined &&
     another.email === this.email &&
     another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "kaue@gmail.com": new User('kaue@gmail.com', 'Kauê', 'kaue123'),
  "teste@gmail.com": new User('teste@gmail.com', 'Teste', 'teste123')
}
