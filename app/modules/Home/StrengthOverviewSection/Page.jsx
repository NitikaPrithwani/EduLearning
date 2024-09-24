import { StrengthOverviewData } from "@/static-data/StrengthOverviewData";
import "../../../assets/StrengthOverview.css";
import Card from "./Card";
import Content from "./Content";
import Heading from "./Heading";
import TotalSuccStudents from "./TotalSuccStudents";
import { StrengthOverviewCard } from "@/static-data/StrengthOverviewCard";

export default function StrengthOverview() {
  return (
    <>
      {StrengthOverviewData.map((data, index) => (
        <div key={index} className="md:container-fluid backgroundGradient py-24 mb-24">
          <div className="md:container md:mx-auto md:w-4/5 mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:flex md:justify-between">
              <div className="text-white m-auto">
                <Heading heading={data.heading} />
                <Content content={data.content} />
                <TotalSuccStudents TotalSuccStudents={data.TotalSuccStudents} />
              </div>
              <div className="space-y-6 md:space-y-8 ms-0 md:ms-7">
                {StrengthOverviewCard.map((card, cardIndex) => (
                  <Card key={cardIndex} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}