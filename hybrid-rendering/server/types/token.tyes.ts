export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type TempToken = {
  token: string
}

export type IdTokens = Tokens & { userId: number };

export type JwtPayload = {
  email: string;
  userId: number;
};

export type JwtPayloadRole = JwtPayload & { roles: Roles }

type Roles = 'admin' | 'customer'
