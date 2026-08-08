import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";

export default function VideoView() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
