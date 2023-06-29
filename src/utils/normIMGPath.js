import IMG_ORIGIN_PATH from "./IMG_ORIGIN_PATH";

export default (path) =>
  path
    ? { uri: IMG_ORIGIN_PATH + path }
    : require("../assets/images/img-not-found.png");
