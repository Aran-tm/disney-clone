import axios from "axios";

const movieBaseUrl = "https://www.themoviedb.org/3";
const api_key = '12bafd19069ee3ca1401e2d62b10bc59';

// https://api.themoviedb.org/3/trending/all/day?api_key=12bafd19069ee3ca1401e2d62b10bc59
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key" + api_key);

export default {
    getTrendingVideos
}