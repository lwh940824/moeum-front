import { useEffect } from "react";

function GoogleCallback() {
    async function handleGoogleCallback() {
        const url = new URL(window.location.href);
        const code = url.searchParams.get("code");
        const error = url.searchParams.get("error");
        if (error) throw new Error(error);
        if (!code) throw new Error("No code");

        const verifier = sessionStorage.getItem("google_pkce_verifier");
        if (!verifier) throw new Error("No PKCE verifier");

        // ✅ code + verifier를 백엔드로 전달
        const res = await fetch("http://localhost:8080/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                provider: "google",
                code,
                codeVerifier: verifier,
                redirectUri: "http://localhost:7070/auth/google/callback",
            }),
        });

        if (!res.ok) throw new Error(`Login failed: ${res.status}`);

        const data = await res.json();
        const jwt = data.jwt;
        
        localStorage.setItem("accessToken", jwt);

        window.location.href = "/";
    }

    useEffect(() => {handleGoogleCallback()}, []);

    return <div>로그인 처리 중...</div>;
}

export default GoogleCallback;