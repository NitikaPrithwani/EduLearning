import { ArticlesData } from "@/static-data/ArticlesData";
import "../../../assets/Articles.css";
import ArticleCard from './ArticleCard';

export default function Articles() {
    return (
        <div className="md:container md:mx-auto md:w-4/5 flex justify-center space-x-6 space-y-4 w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 mb-12">
            {ArticlesData.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}



