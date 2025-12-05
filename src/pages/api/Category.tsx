import axios from "axios";
import NavBar from "../../components/NavBar";
import { categoryApi } from "../../api/categoryApi";
import { useEffect, useState } from "react";
import { categoryGroupApi } from "../../api/categoryGroupApi";

type CategoryGroup = {
  id: number;
  name: string;
  categoryType: string;
  imageUrl: string;
};

const Category = () => {
  const [form, setForm] = useState({categoryId: "", name: "", imageUrl: "", investmentYn: "", recurringType: "", recurringStartDt: "", recurringEndDt: ""});
  const [categoryGroupList, setCategoryGroupList] = useState<CategoryGroup[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const getCategory = async () => {
    const data = await categoryApi.get(parseInt(form.categoryId));
  };

  const getCategoryList = async () => {
    const data = await categoryApi.list();
  };

  const postCategory = async () => {
    const data = await categoryApi.post(form);
  };

  const updateCategory = async () => {
    const params = {
      name: "알바비",
      categoryType: "INCOME",
      imageUrl: "/1",
    };
    const data = await categoryApi.put(parseInt(form.categoryId), form);
  };

  const deleteCategory = async () => {
    await categoryApi.delete(parseInt(form.categoryId));
  };

  useEffect(() => {
    const getCategoryGroupList = async () => {
      const categoryGroupList = await categoryGroupApi.list();
      const a: any  = categoryGroupList.data; //TODO: any 타입 바꿔야함
      setCategoryGroupList(a);
    }
    getCategoryGroupList();
  }, []);

  return (
    <div>
      <h1>카테고리</h1>
      <br></br>

      <form>
        <input name="categoryId" value={form.categoryId} onChange={handleChange} />

        <input name="name" value={form.name} onChange={handleChange} />
        <select name="categoryGroup" onChange={handleChange}>
          <option value="">선택</option>
          {categoryGroupList.map((categoryGroup) => (
            <option key={categoryGroup.id} value={categoryGroup.id}>
              {categoryGroup.name}
            </option>
          ))}
        </select>
        <select name="investmentYn" onChange={handleChange}>
          <option value="">선택</option>
          <option value="Y">사용</option>
          <option value="N">미사용</option>
        </select>
        <input type="date" name="recurringStartDt" value={form.recurringStartDt} onChange={handleChange} />
        <input type="date" name="recurringEndDt" value={form.recurringEndDt} onChange={handleChange} />
        <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
      </form>

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
