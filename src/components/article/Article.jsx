import styled from "./article.module.css";


function Article(props){
    

    return(

        <div className={styled.articleWrapper}>

            <img src={props.harchi.imageurl}  />
            
            
            <h3>{props.harchi.title}</h3>
            <p>خواندن در {props.harchi.readingtime} دقیقه</p>
           
        </div>
    )


}

export default Article;
