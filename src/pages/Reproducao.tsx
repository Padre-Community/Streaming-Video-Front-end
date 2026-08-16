import { VideoPlayer } from "../UI/components/VideoPlayer/VideoPlayer";
import useReproducao from "./useReproducao";

const videoMock = {
  titulo: "Como estruturar componentes reutilizáveis em React",
  descricao:
    "Nesta aula falamos sobre composição de componentes, separação entre UI e regra de negócio, " +
    "e como manter uma pasta de componentes que escala junto com o produto.",
  url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  thumbnail:
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
  autor: "Equipe de Front-end",
  visualizacoes: 12483,
  publicadoEm: "2026-08-02T14:30:00.000Z",
  duracaoEmSegundos: 596,
};

function formatarVisualizacoes(valor: number) {
  if (valor >= 1_000_000)
    return `${(valor / 1_000_000).toFixed(1).replace(".", ",")} mi`;
  if (valor >= 1_000) return `${(valor / 1_000).toFixed(1).replace(".", ",")} mil`;
  return String(valor);
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatarDuracao(segundos: number) {
  const minutos = Math.floor(segundos / 60);
  const resto = segundos % 60;
  return `${minutos}:${String(resto).padStart(2, "0")}`;
}

export default function Reproducao() {
  const video = videoMock;

  const { isExpandida, handleExpandir, precisaTruncar, descricaoVisivel } =
    useReproducao(video.descricao);

  const inicial = video.autor.trim().charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-main px-4 py-8 font-roboto">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
        <VideoPlayer
          src={video.url}
          poster={video.thumbnail}
          titulo={video.titulo}
        />

        <h1 className="text-xl leading-snug font-bold text-title sm:text-2xl">
          {video.titulo}
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-subtitle/70">
          <div className="flex items-center gap-3">
            <span
              className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-primary text-base font-bold text-white"
              aria-hidden="true"
            >
              {inicial}
            </span>
            <span className="font-semibold text-subtitle">{video.autor}</span>
          </div>
          <span aria-hidden="true">•</span>
          <span>{formatarVisualizacoes(video.visualizacoes)} visualizações</span>
          <span aria-hidden="true">•</span>
          <span>{formatarData(video.publicadoEm)}</span>
          <span className="rounded-full border border-border-main px-2.5 py-1 text-xs text-subtitle">
            {formatarDuracao(video.duracaoEmSegundos)}
          </span>
        </div>

        <section
          className="rounded-2xl border border-border-main p-4 text-sm leading-relaxed text-subtitle"
          aria-label="Descrição do vídeo"
        >
          <p className="whitespace-pre-wrap">{descricaoVisivel}</p>
          {precisaTruncar && (
            <button
              type="button"
              className="mt-2 cursor-pointer font-semibold text-title hover:underline"
              onClick={handleExpandir}
              aria-expanded={isExpandida}
            >
              {isExpandida ? "Mostrar menos" : "Mostrar mais"}
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
