import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const goCategoryGroup = () => {
    navigate("/categoryGroup");
  };

  const goCategory = () => {
    navigate("/category");
  };

  const goPayment = () => {
    navigate("/payment");
  };

  const go = () => {
    navigate("/categoryGroup");
  };

  const goLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <br />
      <button onClick={goCategoryGroup}>카테고리그룹 페이지</button>
      <button onClick={goCategory}>카테고리 페이지</button>
      <button onClick={goPayment}>결제수단 페이지</button>
      <button onClick={goLogin}>Login Page</button>
    </div>
  );
};

export default NavBar;
