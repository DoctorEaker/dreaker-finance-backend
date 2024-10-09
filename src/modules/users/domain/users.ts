export class User {
  constructor(
    public id: string,
    public username: string,
    public email: string,
    public password: string, // Note: Password should be hashed
  ) {}
}
