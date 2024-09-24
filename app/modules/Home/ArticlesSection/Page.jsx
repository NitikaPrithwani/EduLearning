import "../../../assets/Articles.css";
import ArticleHeading from "./ArticleHeading";
import Articles from "./Articles";
 
export default function ArticlesSection() {
  return (
    <section className="py-18 bg-white">
        <ArticleHeading />
        <Articles />
    </section>
  );
}