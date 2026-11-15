import { Navbar } from "../UI/components/Navbar/Navbar";
import { Banner } from "../UI/components/Banner/Banner";
import { useState } from "react";
import VideoView from "../module/video/VideoView/VideoView";
import UploadVideoCard from "../UI/components/UploadVideoCard/UploadVideoCard";

export default function Home() {
  const [isUploadOpen, setUploadOpen] = useState(false);
  console.log("Estado atual:", isUploadOpen);
  return (
    <div>
      <Navbar onOpenUpload={() => setUploadOpen(true)} />
      <Banner />
      <VideoView />
      {isUploadOpen ? (
        <UploadVideoCard handleOpen={() => setUploadOpen(false)} />
      ) : null}
    </div>
  );
}
