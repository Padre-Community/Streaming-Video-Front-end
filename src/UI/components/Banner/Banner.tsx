import { bannerMock } from "./mocks/bannerMock";
import { UIbutton } from "../Button/Button";

export const Banner = () => {
  const featuredBanner =
    bannerMock.find((item) => item.isInDestaque) || bannerMock[0];
  return (
    <section className="relative w-[80%] mx-auto h-145 rounded-3xl overflow-hidden">
      <img
        src={featuredBanner.thumbnail_Url}
        alt={featuredBanner.title}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 right-0 h-50 bg-gradient-to-t from-black/90 to-tranparent pointer-events-none"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-r from-black via-black/60 to-transparent text-white">
         <div className="flex items-center gap-2">
          {featuredBanner.isInDestaque && (
            <span className="inline-flex gap-1.5 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-white bg-red-600 rounded mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12.22 1.832c-.11-.271-.482-.315-.652-.078C8.924 5.438 4.5 9.077 4.5 14.156 4.5 18.28 7.858 21.6 12 21.6s7.5-3.32 7.5-7.444c0-5.834-5.278-9.426-7.28-12.324zm-1.72 12.324c0-1.896 1.05-3.535 2.1-4.8 1.155 1.77 2.4 3.328 2.4 4.8 0 2.485-2.015 4.5-4.5 4.5s-4.5-2.015-4.5-4.5c0-2.316 1.875-4.322 3.6-6.144-.6 1.8-.9 3.924.9 6.144z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Destaque hoje</span>
            </span>
          )}
          <span className="inline-block px-2.5 text-xs font-bold  tracking-wider text-white-400 rounded-md mb-2">
            {featuredBanner.category}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          {featuredBanner.title}
        </h1>
        <p className="max-w-xl text-gray-300 line-clamp-3 max-w-xl leading-relaxed mb-3">
          {featuredBanner.description}
        </p>

        <div className="flex items-center gap-4 mt-5 my-5">
          <UIbutton variant="primary" className="rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            <span className="uppercase text-xs font-medium rounded mt-1 mb-1">
              Assistir Agora
            </span>
          </UIbutton>

          <UIbutton
            variant="secondary"
            className="bg-transparent border border-zinc-800 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
            <span>Compartilhar</span>
          </UIbutton>
        </div>
      </div>
    </section>
  );
};
