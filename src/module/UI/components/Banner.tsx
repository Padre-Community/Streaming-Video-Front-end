import { bannerMock } from "./mocks/bannerMock";
import { UIbutton } from "./Button";

export const Banner = () => {
  const featuredBanner =
    bannerMock.find((item) => item.isInDestaque) || bannerMock[0];
  return (
    <section className="relative w-full h-[650px] rounded-xl overflow-hidden">
      <img
        src={featuredBanner.thumbnail_Url}
        alt={featuredBanner.title}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 bg-gradient-to-t from-black via-black/70 to-transparent text-white">
        {featuredBanner.isInDestaque && (
          <span className="inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-widest text-white bg-red-600 rounded mb-2">
            DESTAQUE
          </span>
        )}
        <h1 className="text-4xl font-bold text-red-600">
          {featuredBanner.title}
        </h1>
        <span className="inline-block px-2.5 text-xs font-bold  tracking-wider text-white-400 bg-red-950/60 rounded-md mb-2">
          {featuredBanner.category}
        </span>
        <div className="flex items-center gap-4 mt-4 my-3">
          <UIbutton variant="primary">
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
            <span>Assistir</span>
          </UIbutton>
        </div>
        <p className="max-w-xl text-gray-300 line-clamp-3 max-w-xl leading-relaxed">
          {featuredBanner.description}
        </p>
      </div>
    </section>
  );
};
