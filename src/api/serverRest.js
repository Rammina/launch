import axios from "axios";

const serverURL = "https://api.spacexdata.com/v3/launches";

export default axios.create({
  baseURL: serverURL,
});
