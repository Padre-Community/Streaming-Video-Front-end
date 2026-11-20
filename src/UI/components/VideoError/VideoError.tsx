import { RotateCcw, VideoOff } from "lucide-react";

import { UIbutton } from "../Button/Button";

interface VideoErrorProps {
  onRetry: () => void;
}

export default function VideoError({ onRetry }: VideoErrorProps) {
  return (
    <div
      role="alert"
      className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-surface-secondary to-black p-6 text-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/40">
        <VideoOff className="h-8 w-8 text-brand" aria-hidden="true" />
      </div>

      <div>
        <p className="font-heading text-lg font-semibold text-white">
          Não foi possível carregar este vídeo
        </p>
        <p className="mt-1 text-sm text-zinc-400">
          O link pode estar quebrado ou o formato não é compatível.
        </p>
      </div>

      <UIbutton onClick={onRetry} className="rounded-lg">
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Tentar novamente
      </UIbutton>
    </div>
  );
}
