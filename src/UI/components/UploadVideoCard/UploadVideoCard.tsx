import { UIbutton } from "../Button/Button";
import { Input } from "../Input/Input";

export default function UploadVideoCard({
  handleOpen,
}: {
  handleOpen: () => void;
}) {
  return (
    <div className="bg-black border border-zinc-500 p-4 inline-block rounded-[0.5rem] flex flex-col">
      <div className="flex justify-between mb-8">
        <h2 className="flex items-center justify-center text-white text-2xl gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            className="text-red-500"
          >
            <path d="m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z" />
          </svg>
          Enviar Novo Conteúdo
        </h2>
        <UIbutton variant="third" onClick={handleOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </UIbutton>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <p className="text-zinc-300">1. ESCOLHA O VÍDEO</p>

        <UIbutton
          variant="third"
          className="border rounded-[0.5rem] border-zinc-500 mb-5"
        >
          <div className="flex flex-col items-center justify-center p-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="4rem"
              viewBox="0 -960 960 960"
              width="4rem"
              fill="#71717a"
            >
              <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
            </svg>
            <p className="text-[1.2rem]">
              Arraste o arquivo de vídeo aqui ou Clique para buscar
            </p>
            <p className="text-zinc-500">
              Suporta MP4, WebM, MKV e outros formatos de vídeo
            </p>
          </div>
        </UIbutton>

        <div>
          <Input
            placeholder="https://exemplo.com/meu-video.mp4"
            type="text"
            label="linkVideo"
            labelIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#71717a"
              >
                <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
              </svg>
            }
            labelText="OU COLE UM LINK DIRETO DE VÍDEO"
          ></Input>
        </div>
      </div>

      <div className="flex max-sm:flex-col flex-row justify-between gap-8">
        <div className="flex-1 flex flex-col">
          <Input
            type="text"
            placeholder="Ex: Minha Gameplay"
            label="titleVideo"
            labelText="TÍTULO DO VÍDEO"
          ></Input>
        </div>

        <div className="flex-1 flex flex-col">
          <label htmlFor="descriptionVideo" className="text-zinc-300">
            DESCRIÇÃO
          </label>
          <textarea
            id="descriptionVideo"
            className="bg-zinc-800 p-2 grow text-zinc-100 rounded-[0.4rem] resize-none overflow-y-hidden"
            placeholder="Coloque a descrição sobre o vídeo, links de redes sociais ou créditos"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
