import { useState } from "react";
import VideoCard from "../../module/video/components/VideoCard";
import videos from "../../module/video/models/mocks/video-mock";
import type { Video } from "../../module/video/models/video";
import { useParams } from "react-router";

function Reproduction() {
  const { id } = useParams();

  const videoInicial =
    videos.find((video) => video.id === Number(id)) || videos[0];
    
  const [videoSelecionado, setVideoSelecionado] = useState<Video>(videoInicial);
  
  const videosRecomendados = videos
    .filter((video) => video.id !== videoSelecionado.id)
    .slice(0, 4);

  return (
    <main className="p-4">
      <div className="flex flex-col gap-4 lg:flex-row">

        {/* Área de reprodução */}
        <section className="flex-1">
          <div className="aspect-video overflow-hidden rounded-xl bg-black">
            <video
              key={videoSelecionado.id}
              src={videoSelecionado.url}
              controls
              className="h-full w-full object-contain"
            />
          </div>

          {/* Informações do vídeo */}
          <div className="mt-4">
            <span className="text-sm font-semibold text-secondary">
              {videoSelecionado.category_name}
            </span>

            <h1 className="mt-1 text-2xl font-bold text-text-primary">
              {videoSelecionado.title}
            </h1>

            <p className="mt-2 text-text-secondary">
              {videoSelecionado.description}
            </p>
          </div>
        </section>

        {/* Vídeos recomendados */}
        <aside className="w-full lg:w-80 lg:shrink-0">
          <h2 className="mb-4 text-xl font-semibold text-text-primary">
            Recomendados
          </h2>

          <div className="flex flex-col gap-4">
            {videosRecomendados.map((video) => (
              <div
                key={video.id}
                onClick={() => setVideoSelecionado(video)}
                className="cursor-pointer"
              >
                <VideoCard video={video} compact />
              </div>
            ))}
          </div>
        </aside>

      </div>
    </main>
  );
}

export default Reproduction;