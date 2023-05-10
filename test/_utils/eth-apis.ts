import { APIInstance } from "./setup";
import * as dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.ETHERSCAN_API_KEY;

const AccountAPIs: APIInstance[] = [
  {
    title: "Get CMP Balance for a single Address",
    path: `module=account&action=balance&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CMP Balance for multiple Addresses in a single call",
    path: `module=account&action=balancemulti&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972,0xd3c22074bdbbb952b9aa861724448f14d2ac57f7,0x99135c5e7a6d3343f3239c50d8f4fd4d12594c55&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Account Balance for TokenContractAddress",
    path: `module=account&action=tokenbalance&address=0x8b62802d9f908a2ea380dbfc02a83fa74adf68f7&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Normal' Transactions By Address - 1",
    path: `module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },

  {
    title: "Get a list of 'Normal' Transactions By Address - 2",
    path: `module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&page=0&offset=100&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Internal' Transactions by Address - 1",
    path: `module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Internal' Transactions by Address - 2",
    path: `module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=asc&page=0&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get 'Internal Transactions' by Transaction Hash",
    path: `module=account&action=txlistinternal&txhash=0x9602d3fc27ac45da81c24fe0fe92bfb358e5abc00257c4d4df1a4508cc2cca63module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get 'Internal Transactions' by Block Range",
    path: `module=account&action=txlistinternal&startblock=2802313&endblock=2825860&sort=asc&page=0&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 1",
    path: `module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 2",
    path: `module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=asc&page=0&offset=2module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 3",
    path: `module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&startblock=2799201&endblock=2799211&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-721 - Token Transfer Events' by Address - 1",
    path: `module=account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-721 - Token Transfer Events' by Address - 2",
    path: `account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=asc&page=0&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get list of Blocks Validated by Address - 1",
    path: `module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocksmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get list of Blocks Validated by Address - 2",
    path: `module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocks&page=1&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

const ContractAPIs: APIInstance[] = [
  {
    title: "Get Contract ABI for Verified Contract Source Codes",
    path: `module=contract&action=getabi&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28bmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get Contract Source Code for Verified Contract Source Codes",
    path: `module=contract&action=getsourcecode&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28bmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

const TransactionAPIs: APIInstance[] = [
  {
    title: "Check Transaction Receipt Status",
    path: `module=transaction&action=gettxreceiptstatus&txhash=0x9c3c35834f6ea8b331bd6747d9a14c316475b863c4728238ca05e7734d5963c5module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

const BlockAPIs: APIInstance[] = [
  {
    title: "Get Block Rewards by BlockNo",
    path: `module=block&action=getblockreward&blockno=39258module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get Estimated Block Countdown Time by BlockNo",
    path: `module=block&action=getblockcountdown&blockno=13787886module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get Block Number by Timestamp",
    path: `module=block&action=getblocknobytime&timestamp=1644245532&closest=aftermodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

const TokenAPIs: APIInstance[] = [
  {
    title: "Get CRC20-Token TotalSupply by ContractAddress",
    path: `module=stats&action=tokensupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28bmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Circulating Supply by ContractAddress",
    path: `module=stats&action=tokenCsupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28bmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Account Balance for TokenContractAddress",
    path: `module=account&action=tokenbalance&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&address=0x298a116ba1ed7ca59eacb679b78217d47328561c&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

const StatAPIs: APIInstance[] = [
  {
    title: "Get Total Supply of CMP on the CMP Chain",
    path: `module=stats&action=cmpsupplymodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get Circulation Supply of CMP on the CMP Chain",
    path: `module=stats&action=cmpcsupplymodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CMP Last Price",
    path: `module=stats&action=cmppricemodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

// TODO:
const ProxyAPIs: APIInstance[] = [];
