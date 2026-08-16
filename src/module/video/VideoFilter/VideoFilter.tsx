import VideoCard from "../components/VideoCard";
import videos from "../models/mocks/video-mock";
import {useState} from "react";

const CATEGORIES = ["Todos", "Natureza", "Sci-Fi", "Tecnologia", "Espaço", "Relax"];

const CATEGORY_TAG_MAP: Record<string, string> = {
    "Natureza": "natureza",
    "Sci-Fi": "ficcao-cientifica",
    "Tecnologia": "tecnologia",
    "Espaço": "espaco",
    "Relax": "relax",
};

export default function VideoFilter() {
    const [active, setActive] = useState("Todos");

    const filteredVideos = videos.filter((video) => {
        if (active === "Todos") return true;
        const tagList = video.tags.split(",").map((tag) => tag.trim());
        const targetTag = CATEGORY_TAG_MAP[active];
        return tagList.includes(targetTag);
    });

    return (
        <div className="mt-10">
                <div className="mx-auto max-w-[80%]">
                    <h2 className="flex items-center gap-2 font-bold text-xl pb-5 border-b border-[#121214]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="lucide lucide-compass-icon lucide-compass">
                            <circle cx="12" cy="12" r="10"/>
                            <path
                                d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>
                        </svg>
                        Navegar por Categorias
                    </h2>
                    <div className="mt-5 mb-15 flex flex-wrap gap-2 lg:gap-5.5">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActive(category)}
                                className={`cursor-pointer px-6 py-3 rounded-full font-semibold text-base transition-colors ${
                                    active === category
                                        ? "bg-red-600 text-white hover:bg-red-700"
                                        : "bg-[#18181b] text-[#9f9faa] border border-[#27272a] hover:bg-neutral-800 hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div>
                        <h2 className="mb-7.5 flex items-center gap-2 font-bold text-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="red" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-flame-icon lucide-flame">
                                <path
                                    d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
                            </svg>
                            Vídeos Recomendados
                        </h2>
                        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {filteredVideos.length > 0 ? (
                                filteredVideos.map((video) => (
                                    <VideoCard key={video.id} video={video} />
                                ))
                            ) : (
                                <p>Não existe nenhum vídeo com esse gênero</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
    )
}