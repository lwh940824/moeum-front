import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface JwtResponse {
  jwt: string;
}

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
        console.log("Sending code to backend:", code);
        axios.post<JwtResponse>('http://localhost:8080/api/auth/google-login', { code })
        .then(res => {
          console.log(res.data.jwt);
          
          localStorage.setItem('jwt', res.data.jwt);
          navigate('/');
        })
        .catch(err => {
          console.error('로그인 실패', err);
          alert('로그인 실패');
        });
    } else {
      alert('코드가 없습니다. 로그인 실패');
    }
  }, []);

  return <div>구글 로그인 처리 중...</div>;
};

export default GoogleCallback;