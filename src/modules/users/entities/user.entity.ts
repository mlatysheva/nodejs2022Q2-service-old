import { Exclude } from 'class-transformer';

export class User {a
  id: string;
  login: string;
  version: number;
  createdAt: number;
  updatedAt: number;

  @Exclude()
  password: string;
}
