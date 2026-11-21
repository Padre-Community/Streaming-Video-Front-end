import { ThumbsUp, Eye } from "lucide-react";
import type { Video } from "../models/video"
import { useVideoInteractionsViewModel } from "./viewmodels/useVideoInteractionsViewmodel";
import { formatCompactNumber } from "../utils/formatDate";


interface VideoInteractionsProps {
    video: Video;
}


function VideoInteractions({ video }: VideoInteractionsProps) {

    const { liked,
        likeCount,
        viewCount,
        toggleLike,
    } = useVideoInteractionsViewModel(video)
    return (
        <div className=" flex items-center gap-4 mt-4">

            <button
                onClick={toggleLike}
                type="button"
                aria-pressed={liked}
                aria-label={liked ? "Retirar gosto" : "Gostar do video"}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-border 
                transition-colors bg-surface-secondary hover:bg-surface cursor-pointer
                ">
                <ThumbsUp
                    className={liked ? "text-red-500 fill-red-500" : "text-red-500 active:scale-50"} />
                <span className="text-text-secondary font-semibold"
                >{formatCompactNumber(likeCount)}</span>
            </button>

            <div className="flex gap-2 text-text-secondary border border-border px-3 py-2 rounded-full 
            hover:bg-surface bg-surface-secondary items-center
            ">
               <Eye size={20}
               
               /> 
               <div className="text-text-secondary font-semibold">
                {formatCompactNumber(viewCount)}
                </div>
            </div>
        </div>
    )
}

export default VideoInteractions;

