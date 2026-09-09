import type { Video } from "../models/video";
import { Eye, ThumbsUp, Calendar } from "lucide-react";
import { formatDate, formatCompactNumber } from "../utils/formatDate";

export interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <article className="w-full overflow-hidden rounded-xl bg-surface border border-border transition-colors duration-200">
      <div className="relative">
        <span className="absolute top-3 left-3 rounded-md bg-surface/35 border border-brand/40 px-2.5 py-1 text-xs font-semibold text-secondary backdrop-blur-sm">
          {video.category_name}
        </span>

        <span className="absolute right-3 bottom-3 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
          {video.duration}
        </span>

        <img
          src={video.thumbnail_url}
          alt={video.channel_name}
          className="h-44 w-full object-cover"
        />
      </div>

      <div className="flex h-44 flex-col p-4">
        <h2 className="line-clamp-2 text-base font-semibold text-text-primary">
          {video.title}
        </h2>

        <div className="flex items-center gap-2 mt-3">
          <img
            src={
              video.avatar_url || "https://github.com/identicons/johndoe.png"
            }
            alt={video.channel_name}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-text-secondary text-sm">{video.channel_name}</p>
        </div>

        <hr className="mt-auto border-border" />

        <footer className="mt-3 flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center gap-1">
            <Eye size={14} />
            <span>{formatCompactNumber(video.view_count)}</span>
          </div>

          <div className="flex items-center gap-1">
            <ThumbsUp size={14} />
            <span>{formatCompactNumber(video.like_count)}</span>
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
