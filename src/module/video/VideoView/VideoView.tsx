import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";

export default function VideoView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-2">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
