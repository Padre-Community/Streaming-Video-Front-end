import { bannerMock } from "./mocks/bannerMock";

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
        <span className="inline-block px-2.5 py-1 text-xs font-bold  tracking-wider text-white-400 bg-red-950/60 rounded-md mb-2">
          {featuredBanner.category}
        </span>
        <p className="max-w-xl text-gray-300 line-clamp-3 max-w-xl">
          {featuredBanner.description}
        </p>
      </div>
    </section>
  );
};
