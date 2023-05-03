import * as _axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
export const CMP_SCAN_API_KEY = process.env.CMP_API_KEY;
export const API_KEY = process.env.ETHERSCAN_API_KEY;
// export const BASE_URI = "https://cmpscan.io/api";
export const BASE_URI = "https://api.etherscan.io/api";
export const axios = _axios.default;
