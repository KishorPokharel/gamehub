import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6519f7cff0ec47b0ae2cff1aa2891f8b",
  },
});
