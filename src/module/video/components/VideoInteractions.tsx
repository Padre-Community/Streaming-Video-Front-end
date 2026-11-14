import { ThumbsUp, Eye } from "lucide-react";
import type { Video } from "../models/video"
import { useVideoInteractionsViewModel } from "./viewmodels/useVideoInteractionsViewmodel";



interface VideoInteractionsProps{
    video: Video;
}


function VideoInteractions({video}:VideoInteractionsProps){

    const {liked,
        likeCount,
        toggleLike,}= useVideoInteractionsViewModel(video)
    return(
        <div className=" flex items-center gap-4">

            <button
                onClick={toggleLike}
                className="flex items-center gap-2 p-2 rounded-xl ">
                    <ThumbsUp 
                        className={liked? "text-text-primary fill-background" :"text-text-secondary"}/>
                    <span>{likeCount}</span>
                </button>
        </div>
    )
}

export default VideoInteractions;

