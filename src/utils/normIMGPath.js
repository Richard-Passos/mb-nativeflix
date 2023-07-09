const IMG_ORIGIN_PATH = "https://image.tmdb.org/t/p/original";

export default (path) =>
  path
    ? { uri: IMG_ORIGIN_PATH + path }
    : require("../assets/images/img-not-found.png");
