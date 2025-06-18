//react
import { useEffect, useRef } from "react";

const VideoPlayerWithControls = ({
  video,
  currentIndex,
  items,
  onVideoSelect,
}) => {
  const videoRef = useRef();

  useEffect(() => {
    const savedTime = localStorage.getItem(`video-progress-${video.url}`);
    if (videoRef.current && savedTime) {
      videoRef.current.currentTime = parseFloat(savedTime);
    }
  }, [video]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      localStorage.setItem(
        `video-progress-${video.url}`,
        videoRef.current.currentTime
      );
    }
  };

  return (
    <>
      <h2>تشغيل الفيديو: {video.title || "لا يوجد عنوان"}</h2>
      {video.url ? (
        <>
          <video
            ref={videoRef}
            src={video.url}
            controls
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => {
              setTimeout(() => {
                const next = (currentIndex + 1) % items.length;
                if (next !== 0 && next > currentIndex) {
                  onVideoSelect(items[next], next);
                }
              }, 3000);
            }}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <p style={{ marginTop: "0.5rem" }}>المدة: {video.time}</p>
          <a
            href={video.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "0.5rem",
              display: "inline-block",
              color: "#007bff",
            }}
          >
            تحميل الفيديو
          </a>
        </>
      ) : (
        <p>لا يوجد رابط للفيديو.</p>
      )}
    </>
  );
};

export default VideoPlayerWithControls;
