"use client";
import { useState } from 'react';
import CampusVideoContent from "./CampusVideoContent";
import CampusVideoHeading from "./CampusVideoHeading";
import styles from "../../../assets/CampusVideoSection.module.css";
import PlayBtn from "./PlayBtn";

export default function CampusVideoSection() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div className={styles.VideoBgImg}>
      {!showVideo ? (
        <>
          <CampusVideoHeading />
          <CampusVideoContent />
          <PlayBtn onClick={handlePlayButtonClick} />
        </>
      ) : (
        <div className="relative">
          <iframe
            src="https://www.youtube.com/embed/DznA-oe4wJk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[32rem]"
          ></iframe>
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
