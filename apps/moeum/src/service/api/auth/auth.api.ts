import { api } from "@moeum/api";
import type { GoogleLoginRequest, LoginRequest, JwtResponse } from "./auth.type";

export const AuthApi = {
  googleLogin: (payload: GoogleLoginRequest) =>
    api.post<JwtResponse>("/auth/google-login", payload),
  login: (payload: LoginRequest) => api.post<JwtResponse>("/auth/login", payload),
  devToken: (email: string, name?: string) =>
    api.post<JwtResponse>(
      `/auth/dev-token?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name ?? "Dev User")}`
    ),
};
