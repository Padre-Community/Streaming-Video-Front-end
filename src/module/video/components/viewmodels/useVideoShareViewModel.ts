import { useCallback } from "react";
import type { Video } from "../../models/video";



export function useVideoShareViewModel(video: Video){
    const isShareSupported = !! navigator.share;

    async function shareVideo() {
        if(isShareSupported){
          try{
            await  navigator.share({
                title: video.title,
                text: video.description,
                url: window.location.href,
            });
          }  catch (error){
            console.error("Erro ao compartilhar", error)
          }
         
        }
    }
    return{
        shareVideo
    }
}