import { Navbar } from "../UI/components/Navbar/Navbar";
import { Banner } from "../UI/components/Banner/Banner";
import VideoView from "../module/video/VideoView/VideoView";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <VideoView />
    </div>
  );
}
