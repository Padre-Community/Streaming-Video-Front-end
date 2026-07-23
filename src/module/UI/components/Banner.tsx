import { bannerMock } from "./bannerMock";

export const Banner = () => {
  const featuredBanner =
    bannerMock.find((item) => item.isInDestaque) || bannerMock[0];
  return (
    <section>
      <img src={featuredBanner.Thumbnail_url} alt={featuredBanner.Title} />
      {featuredBanner.isInDestaque && <span>DESTAQUE</span>}
      <h1>{featuredBanner.Title}</h1>
      <span>{featuredBanner.Category}</span>
      <p>{featuredBanner.Description}</p>
    </section>
  );
};
