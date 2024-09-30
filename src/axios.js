import axios from "axios";
import { baseUrl } from "./constands/constants";

const instance = axios.create({
    baseURL: baseUrl,
  });
  export default instance;