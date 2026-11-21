import { useVideoShareViewModel } from "./viewmodels/useVideoShareViewModel";
import type { Video } from "../models/video";
import { Share } from "lucide-react";


interface VideoShareProps{
    video: Video;
}

export default function VideoShare({video}:VideoShareProps){
    const {shareVideo} = useVideoShareViewModel(video)

    return <button onClick={shareVideo}
    className="pt-2 px-3 border border-border cursor-pointer flex items-center  rounded-full
    font-semibold text-text-secondary gap-2 bg-surface-secondary hover:bg-surface text-[18px]"
    >
      <Share/> Partilhar
    </button>
}