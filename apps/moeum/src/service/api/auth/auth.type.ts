export interface GoogleLoginRequest {
  code: string;
  codeVerifier: string;
}

export interface LoginRequest {
  provider: string;
  code: string;
  codeVerifier?: string;
  state?: string;
}

export interface JwtResponse {
  jwt: string;
}
