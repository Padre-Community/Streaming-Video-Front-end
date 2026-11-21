import type { Video } from "../../models/video";
import { useState } from "react";



export function useVideoInteractionsViewModel(video: Video) {
    const [liked, setLiked] = useState(video.liked)

    const [likeCount, setLikeCount] = useState(video.like_count)

    const [viewCount, setViewCount] = useState(video.view_count)

    function toggleLike() {

        if (liked) {
            setLikeCount(count => count - 1)
        } else {
            setLikeCount(count => count + 1)
        }

        setLiked((previosLiked) => !previosLiked)
    }


    return{
        liked,
        likeCount,
        viewCount,
        toggleLike,
        
    }
}



