import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import Detail from "@/app/modules/News/NewsDetail/Detail";
import { NewsData } from "@/static-data/NewsData";

export default function NewsDetail({params}) {
    const { id } = params;
    const eachNewsData = (id) => {
        return NewsData.filter((news) => news.id == id);
    }
    const newsDetail = eachNewsData(id);
    return (
        <>
            <Header />
            <Detail newsDetail={newsDetail} />
            <Footer />
        </>
    )
}