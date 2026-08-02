import { UIbutton } from "../Button/Button";
import useUploadVideoCard from "../../../module/auth/viewmodels/useUploadVideoCard";

export default function UploadVideoCard({
  handleOpen,
}: {
  handleOpen: () => void;
}) {
  return (
    <div className="bg-black p-2 inline-block rounded-[0.5rem]">
      <div className="flex justify-between">
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
    </div>
  );
}
