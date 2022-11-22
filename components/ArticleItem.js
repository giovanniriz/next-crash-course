import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = (props) => {
  return (
    <Link href="/article/[id]" as={`article/${props.article.id}`}>
      <div className={articleStyles.card}>
        <h3>{props.article.title} &rarr;</h3>
        <p>{props.article.excerpt}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
