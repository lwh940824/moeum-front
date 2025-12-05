import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const pages = [
    { label: "카테고리그룹 페이지", path: "/categoryGroup" },
    { label: "카테고리 페이지", path: "/category" },
    { label: "결제수단 페이지", path: "/payment" },
    { label: "아이콘 페이지", path: "/icon" },
    { label: "로그인 페이지", path: "/login" },
  ];

  return (
    <div>
      <br />
      {pages.map(({ label, path }) => (
        <button key={path} onClick={() => navigate(path)}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
