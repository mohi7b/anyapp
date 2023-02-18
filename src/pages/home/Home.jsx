import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Article from "../../components/article/Article";
import styled from "./home.module.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setIsloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styled.homewrapper}>
      <Navbar />

      <div >
        <div className= "container">
          <h2>مقالات جدید</h2>
        

            {
              isloading ? ( 
               <p> چند لحظه صبر کنید ...</p>
                 ) :(

                  <div className={styled.articles}>
                  {articles.map((arti) => (
                    
                    <Link to={`/article/${arti.id}`} className={styled.Ar}>
                    <Article key={arti.id} harchi={arti} />
                    </Link>
                  ))}
                  </div>
             )
           }
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
