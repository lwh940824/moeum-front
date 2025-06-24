import axios from "axios";
import NavBar from "../../components/NavBar";

const Category = () => {
  const token = localStorage.getItem("jwt");
  const categoryId = 1;

  const getCategory = async () => {
    const data = await axios.get(`http://localhost:8080/api/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  const getCategoryList = async () => {
    const data = await axios.get(`http://localhost:8080/api/category`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  const postCategory = async () => {
    const params = {
      name: "월급",
      categoryType: "INCOME",
      imageUrl: "/",
    };
    const data = await axios.post("http://localhost:8080/api/category", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  const updateCategory = async () => {
    const params = {
      name: "알바비",
      categoryType: "INCOME",
      imageUrl: "/1",
    };
    const data = await axios.put(`http://localhost:8080/api/category/${categoryId}`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteCategory = async () => {
    await axios.delete(`http://localhost:8080/api/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <h1>카테고리</h1>
      <br></br>
      <button onClick={getCategory}>카테고리 조회</button>
      <button onClick={getCategoryList}>카테고리 목록 조회</button>
      <button onClick={postCategory}>카테고리 그룹 생성</button>
      <button onClick={updateCategory}>카테고리 그룹 수정</button>
      <button onClick={deleteCategory}>카테고리 그룹 삭제</button>
      <NavBar />
    </div>
  );
};

export default Category;
