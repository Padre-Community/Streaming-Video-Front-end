import AppRoutes from "./routes/index.tsx";
import { UIbutton } from "./UI/components/Button/Button.tsx";
import useUploadVideoCard from "./module/auth/viewmodels/useUploadVideoCard.tsx";
import UploadVideoCard from "./UI/components/UploadVideoCard/UploadVideoCard.tsx";

function App() {
  const { isOpen, handleOpen } = useUploadVideoCard();

  return (
    <>
      <UIbutton onClick={handleOpen}>Publicar Vídeo</UIbutton>
      <div className="grid place-items-center">
        {isOpen && <UploadVideoCard handleOpen={handleOpen}></UploadVideoCard>}
        {/*<AppRoutes />; */}

        {/* Isso daqui deve ser retirado antes de enviar para o pull request */}
      </div>
    </>
  );
}

export default App;
