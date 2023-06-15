import * as _axios from "axios";
import * as dotenv from "dotenv";
import { string } from "hardhat/internal/core/params/argumentTypes";
dotenv.config();
export const CMP_SCAN_API_KEY = process.env.CMP_API_KEY;
// export const API_KEY = process.env.ETHERSCAN_API_KEY;
export const API_KEY = CMP_SCAN_API_KEY;
export const BASE_URI = "https://api.cmpscan.io/api?";
// export const BASE_URI = "https://api.etherscan.io/api";
export const axios = _axios.default;
export const WAITING_TIME = 5000;

export interface APIInstance {
  title: string;
  path: string;
}
