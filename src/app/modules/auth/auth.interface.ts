import { Model } from 'mongoose';
import { USER_ROLE } from './auth.const';
export type TLoginUser = {
  email: string;
  password: string;
};

type TRoleEnum = {
  role: {
    type: string;
    enum: ['admin' | 'user'];
  };
};

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
    type: Boolean;
    default: false;
  };
};

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}

export type Trole = keyof typeof USER_ROLE;
