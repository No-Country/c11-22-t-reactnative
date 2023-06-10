import { ROLES } from 'src/constants/roles';

export interface PayloadToken {
  role: ROLES;
  sub: string;
}

export interface AuthBody {
  email: string;
}

export interface AuthTokenResult {
  role: string;
  sub: string;
  iat: number;
  exp: number;
}

export interface IUseToken {
  role: string;
  sub: string;
  isExpired: boolean;
}
