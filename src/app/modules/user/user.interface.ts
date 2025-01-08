import { Model } from 'mongoose';

type TName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TUser = {
  name: TName;
  email: string;
  password: string;
  role: {
    type: string;
    enum: ['admin' | 'user'];
    default: 'user';
  };
  isBlocked?: {
    type: boolean;
    default: false;
  };
};

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
