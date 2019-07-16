import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/582cd481828b56114754799a969ccab9/"
});
