import axios from "axios";
import Api from "../API/Api";

const addMovie = (movie) => {
  return Api.post("/saveMovie", movie);
};

const MovieService = { addMovie };
export default MovieService;