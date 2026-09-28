import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";
import ThemeFilter from "../components/ThemeFilter/ThemeFilter";
import { useState } from "react";

const categories = videos.map((video) => video.category_name);
const uniqueCategories = ["Todos", ...new Set(categories)];

export default function VideoView() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredVideos =
    selectedCategory === "Todos"
      ? videos
      : videos.filter((video) => video.category_name === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      <ThemeFilter
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}