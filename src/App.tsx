import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import GoogleCallback from "./pages/GoogleCallback";
import Home from "./pages/Home";
import CategoryGroup from "./pages/api/CategoryGroup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth2/callback" element={<GoogleCallback />} />
        <Route path="/categoryGroup" element={<CategoryGroup />} />
      </Routes>
    </Router>
  );
};

export default App;
