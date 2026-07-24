import { bannerMock } from "./mocks/bannerMock";

export const Banner = () => {
  const featuredBanner =
    bannerMock.find((item) => item.isInDestaque) || bannerMock[0];
  return (
    <section className="relative w-full h-[450px] rounded-xl overflow-hidden">
      <img
        src={featuredBanner.thumbnail_Url}
        alt={featuredBanner.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t via-black/70 to-transparent text-white">
        {featuredBanner.isInDestaque && <span>DESTAQUE</span>}
        <h1>{featuredBanner.title}</h1>
        <span>{featuredBanner.category}</span>
        <p className="line-clamp-3 max-w-xl">{featuredBanner.description}</p>
      </div>
    </section>
  );
};
