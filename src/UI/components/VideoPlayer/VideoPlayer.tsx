import { useState } from "react";

import VideoError from "../VideoError/VideoError";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  // Muda a cada "Tentar novamente" para remontar o <video> e recarregar o src
  const [attempt, setAttempt] = useState(0);

  const handleRetry = () => {
    setHasError(false);
    setAttempt((prev) => prev + 1);
  };

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl bg-black ${className}`}
    >
      {hasError ? (
        <VideoError onRetry={handleRetry} />
      ) : (
        <video
          key={attempt}
          src={src}
          controls
          onError={() => setHasError(true)}
          className="h-full w-full object-contain"
        />
      )}
    </div>
  );
}
