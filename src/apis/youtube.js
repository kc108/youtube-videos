import axios from "axios";

const KEY = "AIzaSyANpaPi4HypnVTW4n3LshEAHRDWhsHh61I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
