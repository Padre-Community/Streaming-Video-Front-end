import type { Video } from "../models/video";
import { Eye, ThumbsUp, Calendar } from "lucide-react";
import { formatDate, formatCompactNumber } from "../utils/formatDate";

export interface VideoCardProps {
  video: Video;
  compact?: boolean;
}

export default function VideoCard({
  video,
  compact = false,
}: VideoCardProps) {
  // Versão compacta usada na tela de reprodução
  if (compact) {
    return (
      <article className="flex w-full gap-3 rounded-xl border border-border bg-surface p-2">
        <img
          src={video.thumbnail_url}
          alt={video.title}
          className="h-20 w-28 shrink-0 rounded-lg object-cover"
        />

        <div className="min-w-0">
          <h2 className="line-clamp-2 text-sm font-semibold text-text-primary">
            {video.title}
          </h2>

          <p className="mt-1 text-xs text-text-secondary">
            {video.channel_name}
          </p>

          <div className="mt-1 flex items-center gap-1 text-xs text-text-secondary">
            <Eye size={12} />

            <span>
              {formatCompactNumber(video.view_count)} visualizações
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Versão normal usada na Home
  return (
    <article className="w-full overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-200">
      <div className="relative">
        <span className="absolute left-3 top-3 rounded-md border border-brand/40 bg-surface/35 px-2.5 py-1 text-xs font-semibold text-secondary backdrop-blur-sm">
          {video.category_name}
        </span>

        <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
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

        <div className="mt-3 flex items-center gap-2">
          <img
            src={
              video.avatar_url ||
              "https://github.com/identicons/johndoe.png"
            }
            alt={video.channel_name}
            className="h-6 w-6 rounded-full object-cover"
          />

          <p className="text-sm text-text-secondary">
            {video.channel_name}
          </p>
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