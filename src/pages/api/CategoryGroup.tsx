import NavBar from "../../components/NavBar";
import { categoryGroupApi } from "../../api/categoryGroupApi";

const CategoryGroup = () => {
  const categoryGroupId = 1;

  const getCategoryGroup = async () => {
    const data = await categoryGroupApi.get(categoryGroupId);
    console.log(data);
  };

  const getCategoryGroupList = async () => {
    const data = await categoryGroupApi.list();
    console.log(data);
  };

  const postCategoryGroup = async () => {
    const params = {
      name: "월급",
      categoryType: "INCOME",
      imageUrl: "/",
    };

    const data = await categoryGroupApi.post(params);
    console.log(data);
  };

  const updateCategoryGroup = async () => {
    const params = {
      name: "알바비",
      categoryType: "INCOME",
      imageUrl: "/1",
    };

    const data = await categoryGroupApi.put(categoryGroupId, params);
    console.log(data);
  };

  const deleteCategoryGroup = async () => {
    await await categoryGroupApi.delete(categoryGroupId);
  };

  return (
    <div>
      <h1>카테고리</h1>
      <button onClick={getCategoryGroup}>카테고리 조회</button>
      <button onClick={getCategoryGroupList}>카테고리 목록 조회</button>
      <button onClick={postCategoryGroup}>카테고리 그룹 생성</button>
      <button onClick={updateCategoryGroup}>카테고리 그룹 수정</button>
      <button onClick={deleteCategoryGroup}>카테고리 그룹 삭제</button>
      <NavBar />
    </div>
  );
};

export default CategoryGroup;
