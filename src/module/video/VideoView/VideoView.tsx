import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";

export default function VideoView() {
  return (
    <div className="gap-4 flex flex-wrap justify-center mt-10 p-20">

      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
