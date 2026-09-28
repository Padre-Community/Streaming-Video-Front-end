import { Clapperboard, X, UploadCloud, Link as LinkIcon } from "lucide-react";
import { UIbutton } from "../Button/Button";
import { Input } from "../Input/Input";
import { STOCK_LOOPS } from "./mocks/uploadVideoMock";
import videos from "../../../module/video/models/mocks/video-mock";

type categoria = {
  category_id: number;
  category_name: string;
};
const categorias = videos.reduce<categoria[]>((acumulador, video) => {
  const jaExiste = acumulador.some(
    (categoria) => categoria.category_id === video.category_id,
  );
  if (!jaExiste) {
    acumulador.push({
      category_id: video.category_id,
      category_name: video.category_name,
    });
  }
  return acumulador;
}, []);

export default function UploadVideoCard({
  handleOpen,
}: {
  handleOpen: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleOpen}
    >
      <div
        className="bg-surface border border-border p-6 rounded-xl flex flex-col w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2.5 text-text-primary text-xl font-bold font-heading">
            <Clapperboard className="text-brand w-6 h-6" />
            Enviar Novo Conteúdo
          </h2>
          <UIbutton
            variant="third"
            onClick={handleOpen}
            className="p-1.5 rounded-md hover:bg-border/40 transition-colors"
          >
            <X className="text-text-primary w-5 h-5" />
          </UIbutton>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-primary text-xs font-semibold tracking-wide uppercase">
            1. ESCOLHA O VÍDEO
          </label>
          <div className="border border-dashed border-border rounded-lg p-8 flex flex-col items-center justify-center bg-background/50 hover:bg-background/80 transition-colors cursor-pointer text-center group">
            <UploadCloud className="text-text-secondary group-hover:text-brand transition-colors w-12 h-12 mb-3" />
            <p className="text-text-primary font-medium text-sm mb-1">
              Arraste o arquivo de vídeo aqui ou{" "}
              <span className="text-text-primary underline">
                clique para buscar
              </span>
            </p>
            <p className="text-text-secondary text-xs">
              Suporta MP4, WebM, MKV e outros formatos de vídeo
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-text-primary text-xs font-semibold tracking-wide uppercase">
              OU ESCOLHA UM LOOP CINEMATOGRÁFICO DE ESTOQUE
            </span>
            <span className="text-[0.65rem] font-medium text-brand border border-brand/40 bg-brand/10 px-2 py-0.5 rounded-full">
              Sem arquivo? Use estes!
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STOCK_LOOPS.map((loop) => (
              <button
                key={loop.id}
                type="button"
                className="group relative flex flex-col rounded-lg overflow-hidden border border-border bg-background text-left hover:border-brand transition-all focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <div className="aspect-video w-full overflow-hidden bg-zinc-900">
                  <img
                    src={loop.thumb}
                    alt={loop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2 bg-surface">
                  <p className="text-text-primary text-xs font-medium truncate">
                    {loop.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            className="cursor-pointer border-2 border-transparent transition-all duration-300 hover:scale-101 hover:border-border"
            placeholder="https://exemplo.com/meu-video.mp4"
            type="text"
            label="linkVideo"
            labelIcon={<LinkIcon className="text-text-secondary w-4 h-4" />}
            labelText="OU COLE UM LINK DIRETO DE VÍDEO"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Input
              className="cursor-pointer border-2 border-transparent transition-all duration-300 hover:scale-101 hover:border-border"
              type="text"
              placeholder="Ex: Minha gameplay épica de RPG"
              label="titleVideo"
              labelText="TÍTULO DO VÍDEO"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="descriptionVideo"
              className="text-text-primary text-xs font-semibold tracking-wide uppercase"
            >
              DESCRIÇÃO
            </label>
            <textarea
              id="descriptionVideo"
              rows={3}
              className="bg-background border border-border p-2.5 text-text-primary text-xs rounded-lg resize-none focus:outline-none focus:border-brand transition-colors"
              placeholder="Escreva detalhes sobre o vídeo, links de redes sociais ou créditos..."
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-text-primary text-xs font-semibold tracking-wide uppercase">
            CATEGORIA
          </label>
          <select className="bg-background border border-border p-2.5 text-text-secondary text-xs rounded-lg focus:outline-none focus:border-brand transition-colors cursor-pointer">
            <option value="">Selecione uma categoria...</option>
            {categorias.map((categoria) => (
              <option key={categoria.category_id} value={categoria.category_id}>
                {categoria.category_name}
              </option>
            ))}
            ;
          </select>
        </div>
      </div>
    </div>
  );
}
