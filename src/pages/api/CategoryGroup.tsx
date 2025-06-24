import axios from "axios";
import NavBar from "../../temp/NavBar";

const CategoryGroup = () => {
  const token = localStorage.getItem("jwt");

  const postCategoryGroup = async () => {
    const params = {
      name: "월급",
      categoryType: "INCOME",
      imageUrl: "/",
    };
    const data = await axios.post("http://localhost:8080/api/category-group", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  const updateCategoryGroup = async () => {
    const params = {
      name: "알바비",
      categoryType: "INCOME",
      imageUrl: "/1",
    };
    const categoryGroupId = 1;
    const data = await axios.put(`http://localhost:8080/api/category-group/${categoryGroupId}`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const deleteCategoryGroup = async () => {
    const categoryGroupId = 1;
    await axios.delete(`http://localhost:8080/api/category-group/${categoryGroupId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <div>
      <button onClick={postCategoryGroup}>카테고리 그룹 생성</button>
      <button onClick={updateCategoryGroup}>카테고리 그룹 수정</button>
      <button onClick={deleteCategoryGroup}>카테고리 그룹 삭제</button>
      <NavBar />
    </div>
  );
};

export default CategoryGroup;
