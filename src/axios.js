import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: "..."
 
});

export default instance;