type Trole = {
  role: 'admin' | 'user';
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
    default:'user'
  };
  isBlocked?: {
    type: Boolean;
    default: false;
  };
};
