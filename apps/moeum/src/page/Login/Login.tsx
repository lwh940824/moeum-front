import { Button, LoginForm, type Providers } from "@moeum/ui";
import { generateCodeVerifier, generateCodeChallenge } from "../../service/login/pkce";
import { File } from "lucide-react";

const Login = () => {
    const googleAuthUrl = import.meta.env.VITE_GOOGLE_AUTH_URL;

    const redirectUri = "http://localhost:7070/oauth2/callback";
    async function startGoogleLogin() {
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const verifier = generateCodeVerifier();
        const challenge = await generateCodeChallenge(verifier);

        sessionStorage.setItem("google_pkce_verifier", verifier);

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: "code",
            scope: "openid email profile",
            code_challenge: challenge,
            code_challenge_method: "S256",
            access_type: "offline",
            prompt: "consent",
        });

        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    }
    
    async function startKakaoLogin() {
        const clientId = import.meta.env.VITE_KAKAO_CLIENT_ID;
        console.log(clientId)

        const params = new URLSearchParams({
            client_id: clientId,
            redirect_uri: redirectUri,
            response_type: "code",

        });

        window.location.href = `https://kauth.kakao.com/oauth/authorize?${params.toString()}`;
    }

    const provider: Providers = [{
        id: 'google',
        label: 'Google',
        onClick: startGoogleLogin,
        icon: File
    }];


    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <Button onClick={startGoogleLogin} />
                <LoginForm providers={provider} />
            </div>
        </div>
    )
}

export default Login;
