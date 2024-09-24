import HeroSection from "@/app/Components/HeroSection/HeroSection";
import CommentsSection from "./CommentsSection";
import NewsDetailContent from "./NewsDetailContent";
import RelatedPosts from "./RelatedPosts";
import ReviewForm from "./ReviewForm";
import SocialMediaHandles from "./SocialMediaHandles";

export default function Detail({newsDetail}) {
    return (
        <>
            <HeroSection image={'/news/newsHeroSection.jpg'} page={"News"} />
            <div className="md:container md:mx-auto md:w-4/5 w-4/5 mx-auto mt-24">
                <NewsDetailContent newsDetail={newsDetail} />
                <SocialMediaHandles newsDetail={newsDetail} />
            </div>
            <CommentsSection newsDetail={newsDetail} />
            <ReviewForm />
            <RelatedPosts />
        </>
    )
}