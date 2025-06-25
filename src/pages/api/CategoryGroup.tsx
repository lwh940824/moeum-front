import NavBar from "../../components/NavBar";
import { categoryGroupApi } from "../../api/categoryGroupApi";
import { useState } from "react";

const CategoryGroup = () => {
  const [form, setForm] = useState({ categoryGroupId: "", name: "", categoryType: "", imageUrl: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getCategoryGroup = async () => {
    const data = await categoryGroupApi.get(parseInt(form.categoryGroupId));
    console.log(data);
  };

  const getCategoryGroupList = async () => {
    const data = await categoryGroupApi.list();
    console.log(data);
  };

  const postCategoryGroup = async () => {
    const data = await categoryGroupApi.post(form);
    console.log(data);
  };

  const updateCategoryGroup = async () => {
    const data = await categoryGroupApi.put(parseInt(form.categoryGroupId), form);
    console.log(data);
  };

  const deleteCategoryGroup = async () => {
    await await categoryGroupApi.delete(parseInt(form.categoryGroupId));
  };

  return (
    <div>
      <h1>카테고리 그룹</h1>
      <br></br>

      <form>
        <input name="categoryGroupId" value={form.categoryGroupId} onChange={handleChange} />
        <input name="name" value={form.name} onChange={handleChange} />
        <select name="categoryType" onChange={handleChange}>
          <option value="">선택</option>
          <option value="INCOME">수입</option>
          <option value="EXPENSE">지출</option>
        </select>
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
      </form>

      <br></br>

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
