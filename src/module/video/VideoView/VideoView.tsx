import { Link } from "react-router";

import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";

export default function VideoView() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-2">
      {videos.map((video) => (
        <Link key={video.id} to={`/reproduction/${video.id}`}>
          <VideoCard video={video} />
        </Link>
      ))}

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
        cupiditate sequi voluptatibus consequatur aliquam sed! Provident
        quaerat, quam ab culpa, esse sunt magni hic doloribus repellat iure,
        ullam eligendi laborum recusandae ducimus obcaecati accusantium nihil
        sequi. Explicabo magni deserunt, commodi odio eveniet fugit similique
        reiciendis rerum quod adipisci? Ea ex commodi aspernatur iure alias
        numquam repellendus, atque vel minus rem voluptatibus. Aperiam hic
        voluptatum ipsum. Quos iusto sed quibusdam rerum eum libero, quod vel ut
        commodi quas recusandae excepturi nemo sit pariatur. Deserunt distinctio
        hic reiciendis iste. Esse iure illum libero blanditiis magnam delectus
        aperiam inventore, veniam omnis, unde officia?
      </p>
    </div>
  );
}
