import { iconApi } from "../../api/iconApi";
import NavBar from "../../components/NavBar";
import { useState } from "react";
const Icon = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const getIcon = async () => {
    const data = await iconApi.get(parseInt(form.categoryGroupId));
    console.log(data);
  };

  const getIconList = async () => {
    const data = await iconApi.list();
    console.log(data);
  };

  const postIcon = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    const data = await iconApi.post(formData);
    console.log(data);
  };

  const updateIcon = async () => {
    const data = await iconApi.put(parseInt(form.categoryGroupId), form);
    console.log(data);
  };

  const deleteIcon = async () => {
    await await iconApi.delete(parseInt(form.categoryGroupId));
  };

  return (
    <div>
      <h1>아이콘 테스트 등록</h1>
      <br></br>

      <form>
        <input type="file" name="file" onChange={handleFileChange} />
      </form>

      {/* <button onClick={getIcon}>아이콘 조회</button> */}
      <button onClick={getIconList}>아이콘 목록 조회</button>
      <button onClick={postIcon}>아이콘 생성</button>
      {/* <button onClick={updateIcon}>아이콘 그룹 수정</button> */}
      {/* <button onClick={deleteIcon}>아이콘 그룹 삭제</button> */}
      <NavBar />
    </div>
  );
};

export default Icon;
