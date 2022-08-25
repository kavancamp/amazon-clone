import axios from "axios";

// URL for deployed cloudfunction
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-946c0/us-central1/api"
  
});

export default instance;