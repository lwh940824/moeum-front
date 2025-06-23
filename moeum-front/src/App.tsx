import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import GoogleCallback from './pages/GoogleCallback';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth2/callback" element={<GoogleCallback />} />
      </Routes>
    </Router>
  );
};

export default App;