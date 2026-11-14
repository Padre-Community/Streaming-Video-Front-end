import type { Video } from "../models/video"
import { useVideoInteractionsViewModel } from "./viewmodels/useVideoInteractionsViewmodel";



interface VideoInteractionsProps{
    video: Video;
}


function VideoInteractions({video}:VideoInteractionsProps){

    const {liked,
        likeCount,
        toggleLike,}= useVideoInteractionsViewModel(video)
    return(<>
    
    
    </>)
}

export default VideoInteractions;
