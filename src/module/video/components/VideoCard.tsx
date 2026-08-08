import type { Video } from "../models/video";
import { Eye, ThumbsUp, Calendar } from "lucide-react";
export interface VideoCardProps {
  video: Video;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(date))
    .replace(".", "");
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="w-72 overflow-hidden rounded-md bg-zinc-900">
      <div className="relative">
        <span className="absolute top-3 left-3 rounded-md bg-zinc-800 px-3 py-1.5 text-sm text-red-600">
          {video.category_name}
        </span>

        <span className="absolute right-3 bottom-3 rounded-md bg-zinc-800 px-2 py-1 text-zinc-300">
          {video.duration}
        </span>

        <img
          src={video.thumbnail_url}
          alt={video.channel_name}
          className="h-44 w-full object-cover"
        />
      </div>

      <div className="flex h-44 flex-col p-4">
        <h2 className="line-clamp-2 text-xl font-semibold text-white">
          {video.title}
        </h2>

        <p className="mt-3 text-zinc-400">{video.channel_name}</p>

        <hr className="mt-auto border-zinc-800" />

  <footer className="mt-3 flex items-center justify-between text-sm text-zinc-400">
  <div className="flex items-center gap-1">
    <Eye size={14} />
    <span>{(video.view_count)}</span>
  </div>

  <div className="flex items-center gap-1">
    <ThumbsUp size={14} />
    <span>{video.like_count}</span>
  </div>

  <div className="flex items-center gap-1">
    <Calendar size={14} />
    <span>{formatDate(video.shipping_date)}</span>
  </div>
</footer>
      </div>
    </article>
  );
}