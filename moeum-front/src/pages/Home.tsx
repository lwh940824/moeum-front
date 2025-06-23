import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('jwt');
    
    const postCategoryGroup = async () => {
        console.log("클릭 이벤트");
        const params = {
            name: "월급",
            categoryType: "INCOME",
            imageUrl: ""
        };
        const data = await axios.post('http://localhost:8080/api/categoryGroup', 
            params, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        console.log(data);
    };

    const goLogin = () => {
        navigate("/login");
    }

  return (
    <div>
        Home Page
        <button onClick={postCategoryGroup}>click</button>
        <button onClick={goLogin}>Login Page</button>
    </div>
  );
};

export default Home;