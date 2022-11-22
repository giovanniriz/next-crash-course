import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = (props) => {
  return (
    <div className={articleStyles.grid}>
      {props.articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
