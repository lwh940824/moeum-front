import { paymentApi } from "../../api/paymentApi";
import NavBar from "../../components/NavBar";

const Payment = () => {
  const paymentId = 1;

  const getCategoryGroup = async () => {
    const data = await paymentApi.get(paymentId);
    console.log(data);
  };

  const getCategoryGroupList = async () => {
    const data = await paymentApi.list();
    console.log(data);
  };

  const postCategoryGroup = async () => {
    const params = {
      name: "월급",
      categoryType: "INCOME",
      imageUrl: "/",
    };

    const data = await paymentApi.post(params);
    console.log(data);
  };

  const updateCategoryGroup = async () => {
    const params = {
      name: "알바비",
      categoryType: "INCOME",
      imageUrl: "/1",
    };

    const data = await paymentApi.put(paymentId, params);
    console.log(data);
  };

  const deleteCategoryGroup = async () => {
    await await paymentApi.delete(paymentId);
  };

  return (
    <div>
      <h1>결제수단</h1>
      <button onClick={getCategoryGroup}>결제수단 조회</button>
      <button onClick={getCategoryGroupList}>결제수단 목록 조회</button>
      <button onClick={postCategoryGroup}>결제수단 그룹 생성</button>
      <button onClick={updateCategoryGroup}>결제수단 그룹 수정</button>
      <button onClick={deleteCategoryGroup}>결제수단 그룹 삭제</button>
      <NavBar />
    </div>
  );
};

export default Payment;
