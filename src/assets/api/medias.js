import axios from "axios";
import { MEDIAS_KEY as KEY } from "@env";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

/* Using const to avoid bug */
export const MEDIAS_KEY = KEY;
