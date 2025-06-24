import React from 'react';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    const clientId = "492084429766-r353f0mr11lsflk23q2mgl6578cl4lod.apps.googleusercontent.com";  // Google Cloud Console에서 발급받은 값
    const redirectUri = "http://localhost:5173/oauth2/callback";
    const scope = "openid email profile";
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&access_type=offline&prompt=consent`;

    window.location.href = authUrl;
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>구글 로그인</h1>
      <button onClick={handleGoogleLogin}>
        Google로 로그인
      </button>
    </div>
  );
};

export default LoginPage;