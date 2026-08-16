interface VideoPlayerProps {
  src: string;
  poster?: string;
  titulo?: string;
  /** Inicia o vídeo automaticamente (sempre mudo, por política dos navegadores) */
  autoPlay?: boolean;
}

export function VideoPlayer({
  src,
  poster,
  titulo,
  autoPlay = false,
}: VideoPlayerProps) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-border-main bg-black">
      <video
        className="block h-full w-full object-contain"
        src={src}
        poster={poster}
        title={titulo}
        controls
        autoPlay={autoPlay}
        muted={autoPlay}
        playsInline
        preload="metadata"
      >
        Seu navegador não suporta a reprodução de vídeo.
      </video>
    </div>
  );
}
