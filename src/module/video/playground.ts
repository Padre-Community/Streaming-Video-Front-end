import videos from "./models/mocks/video-mock";


function testarMaps() {
  const videosCurtidos = videos.map((video) => video.liked);
  console.log(videosCurtidos);
}

testarMaps();
