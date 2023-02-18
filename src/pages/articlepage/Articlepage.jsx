import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./articlepage.module.css";
// import pic from "./../../asset/image/image.jpg";
import { useParams } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";

function Articlepage() {
  const [article, setArticle] = useState({});

  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div >
        <div className={styled.articlepage}>
            <div className={styled.hed}>
            <h1> {article.title} </h1>
            </div>
          
          <img src={article.imageurl} alt="" />
        </div>
        
      </div>
    </div>
  );
}
export default Articlepage;
