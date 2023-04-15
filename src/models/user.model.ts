export class UserDocument {
  static collectionName = 'users';

  name: string;
  email: string;
}

export interface IUserDocument {
  id: string;
  name: string;
  email: string;
}
