"use client";

import { useState } from "react";
import CourseOverview from "./CourseOverview";
import Curriculum from "./Curriculum";
import Instructors from "./Instructors";
import Reviews from "./Reviews";

export default function CourseBenifit() {
    const [activeTab, setActiveTab] = useState("Overview");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const tabs = ["Overview", "Curriculum", "Instructors", "Reviews"];
    return (
        <div className="w-full max-w-screen-md mx-auto mb-5 h-auto border border-gray-300 md:mt-0 mt-5 rounded-2xl">
            <div className="border-b border-gray-200">
                <nav className="flex flex-wrap">
                    {tabs.map((tab, index) => (
                        <div key={tab} className="flex w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 md:mt-0 mt-5">
                            <button
                                onClick={() => handleTabClick(tab)}
                                className={`block w-full mt-5 pb-4 px-1 font-medium text-sm ${activeTab === tab
                                    ? "border-blue-500 border-b-2 text-blue-600"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                    }`}
                            >
                                {tab}
                            </button>
                            {index < tabs.length-1 && (
                                <div className="w-1 h-15 bg-gray-500 hidden md:block"></div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="mt-6">
                {activeTab === "Overview" && (
                    <CourseOverview />
                )}
                {activeTab === "Curriculum" && (
                    <Curriculum />
                )}
                {activeTab === "Instructors" && (
                    <Instructors />
                )}
                {activeTab === "Reviews" && (
                    <Reviews />
                )}
            </div>
        </div>
    );
}
