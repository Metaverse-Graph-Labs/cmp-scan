import { APIInstance } from "./setup";
import * as dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.CMP_API_KEY;
const BASE_URI = "https://api.cmpscan.io/api?";

export const AccountAPIs: APIInstance[] = [
  {
    title: "Get CMP Balance for a single Address",
    path: `${BASE_URI}module=account&action=balance&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CMP Balance for multiple Addresses in a single call",
    path: `${BASE_URI}module=account&action=balancemulti&address=0xf2519c98a7c5920e28a1e3514726e224c7e27972,0xd3c22074bdbbb952b9aa861724448f14d2ac57f7,0x99135c5e7a6d3343f3239c50d8f4fd4d12594c55&tag=latestmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Account Balance for TokenContractAddress",
    path: `${BASE_URI}module=stats&action=tokensupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Normal' Transactions By Address - 1",
    path: `${BASE_URI}module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },

  {
    title: "Get a list of 'Normal' Transactions By Address - 2",
    path: `${BASE_URI}module=account&action=txlist&address=0x3b03a6e6cf79a7e1d5af56e4eb3c1e1b04cffa7d&startblock=2527710&endblock=2541962&page=0&offset=100&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Internal' Transactions by Address - 1",
    path: `${BASE_URI}module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'Internal' Transactions by Address - 2",
    path: `${BASE_URI}module=account&action=txlistinternal&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&startblock=2825812&endblock=2825860&sort=asc&page=0&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get 'Internal Transactions' by Transaction Hash",
    path: `${BASE_URI}module=account&action=txlistinternal&txhash=0x9602d3fc27ac45da81c24fe0fe92bfb358e5abc00257c4d4df1a4508cc2cca63module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get 'Internal Transactions' by Block Range",
    path: `${BASE_URI}module=account&action=txlistinternal&startblock=2802313&endblock=2825860&sort=asc&page=0&offset=10module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 1",
    path: `${BASE_URI}module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=ascmodule=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 2",
    path: `${BASE_URI}module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&startblock=2799201&endblock=2799211&sort=asc&page=0&offset=2module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-20 - Token Transfer Events' by Address - 3",
    path: `${BASE_URI}module=account&action=tokentx&address=0xa2de1fccdce3774c99a33f9b23abe4063f937129&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&startblock=2799201&endblock=2799211&sort=asc&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-721 - Token Transfer Events' by Address - 1",
    path: `${BASE_URI}module=account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=asc&apikey=${API_KEY}`,
  },
  {
    title: "Get a list of 'CRC-721 - Token Transfer Events' by Address - 2",
    path: `${BASE_URI}module=account&action=tokennfttx&contractaddress=0xef2698ce160c3e8602ffa438e3d1cc62836c1ecc&startblock=2792700&endblock=2792712&sort=asc&page=0&offset=10&apikey=${API_KEY}`,
  },
  {
    title: "Get list of Blocks Validated by Address - 1",
    path: `${BASE_URI}module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocks&apikey=${API_KEY}`,
  },
  {
    title: "Get list of Blocks Validated by Address - 2",
    path: `${BASE_URI}module=account&action=getminedblocks&address=0xf81f8d2a3c513fef8718ac4c870ef1d2db39646e&blocktype=blocks&page=1&offset=10&apikey=${API_KEY}`,
  },
];

export const ContractAPIs: APIInstance[] = [
  {
    title: "Get Contract ABI for Verified Contract Source Codes",
    path: `${BASE_URI}module=contract&action=getabi&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=${API_KEY}`,
  },
  {
    title: "Get Contract Source Code for Verified Contract Source Codes",
    path: `${BASE_URI}module=contract&action=getsourcecode&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=${API_KEY}`,
  },
  // TODO: POST Request for code verification
];

export const TransactionAPIs: APIInstance[] = [
  {
    title: "Check Transaction Receipt Status",
    path: `${BASE_URI}module=transaction&action=gettxreceiptstatus&txhash=0x9c3c35834f6ea8b331bd6747d9a14c316475b863c4728238ca05e7734d5963c5&apikey=${API_KEY}`,
  },
];

export const BlockAPIs: APIInstance[] = [
  {
    title: "Get Block Rewards by BlockNo",
    path: `${BASE_URI}module=block&action=getblockreward&blockno=39258&apikey=${API_KEY}`,
  },
  {
    title: "Get Estimated Block Countdown Time by BlockNo",
    path: `${BASE_URI}module=block&action=getblockcountdown&blockno=13787886&apikey=${API_KEY}`,
  },
  {
    title: "Get Block Number by Timestamp",
    path: `${BASE_URI}module=block&action=getblocknobytime&timestamp=1644245532&closest=after&apikey=${API_KEY}`,
  },
];

export const TokenAPIs: APIInstance[] = [
  {
    title: "Get CRC20-Token TotalSupply by ContractAddress",
    path: `${BASE_URI}module=stats&action=tokensupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Circulating Supply by ContractAddress",
    path: `${BASE_URI}module=stats&action=tokenCsupply&contractaddress=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&apikey=${API_KEY}`,
  },
  {
    title: "Get CRC20-Token Account Balance for TokenContractAddress",
    path: `${BASE_URI}module=account&action=tokenbalance&contractaddress=0xb7d2ea9b4dbeb599ffa2dcbb0093ccd8512fcc0d&address=0x298a116ba1ed7ca59eacb679b78217d47328561c&tag=latest&apikey=${API_KEY}`,
  },
];

export const StatAPIs: APIInstance[] = [
  {
    title: "Get Total Supply of CMP on the CMP Chain",
    path: `${BASE_URI}module=stats&action=cmpsupply&apikey=${API_KEY}`,
  },
  {
    title: "Get Circulation Supply of CMP on the CMP Chain",
    path: `${BASE_URI}module=stats&action=cmpcsupply&apikey=${API_KEY}`,
  },
  {
    title: "Get CMP Last Price",
    path: `${BASE_URI}module=stats&action=cmpprice&apikey=${API_KEY}`,
  },
];

export const ProxyAPIs: APIInstance[] = [
  {
    title: "eth_blockNumber",
    path: `${BASE_URI}module=proxy&action=blockNumber&apikey=${API_KEY}`,
  },

  {
    title: "eth_getBlockByNumber",
    path: `${BASE_URI}module=proxy&action=getBlockByNumber&tag=0xd3d8&boolean=true&apikey=${API_KEY}`,
  },

  {
    title: "eth_getBlockTransactionCountByNumber",
    path: `${BASE_URI}module=proxy&action=getBlockTransactionCountByNumber&tag=0x2b3560&apikey=${API_KEY}`,
  },

  {
    title: "eth_getTransactionByHash",
    path: `${BASE_URI}module=proxy&action=getTransactionByHash&txhash=0xb40f0f6a83afba8a305938b776b3dfb11a63ac73f3e5eb53b8816d10db04cb84&apikey=${API_KEY}`,
  },

  {
    title: "eth_getTransactionByBlockNumberAndIndex",
    path: `${BASE_URI}module=proxy&action=getTransactionByBlockNumberAndIndex&tag=0x1DCBD9&index=0x0&apikey=${API_KEY}`,
  },

  {
    title: "eth_getTransactionCount",
    path: `${BASE_URI}module=proxy&action=getTransactionCount&address=0x2d104cc9db395d5bc1d0043f7be3f8f5c1cffc88&tag=latest&apikey=${API_KEY}`,
  },

  {
    title: "eth_sendRawTransaction",
    path: `${BASE_URI}module=proxy&action=sendRawTransaction&hex=0xf8ab1385ba43b7400082afc894715aa09e6950ffdbda55cea77f72dd7f52ae1a6280b84440c10f1900000000000000000000000075ecd1ab06c4e34763a47e1033e80de614d09fa4000000000000000000000000000000000000000000000000000000014b1a92c082023ea0fc44da2f85b9fc598124c81ed13a62b49e6edc6248d8c4940ed9a192f62717cea05832a187f1d413c0fa27669ad277f2bcaa390827c420e314af44d8ee194c0eb3&apikey=${API_KEY}`,
  },

  {
    title: "eth_getTransactionReceipt",
    path: `${BASE_URI}module=proxy&action=getTransactionReceipt&txhash=0x4d4c7996d8c52ea12716408cc8a2c0d3fcd7eafc1f7fbb59485bd12b685204e0&apikey=${API_KEY}`,
  },

  {
    title: "eth_call",
    path: `${BASE_URI}module=proxy&action=call&to=0xbe05ac1fb417c9ea435b37a9cecd39bc70359d31&data=0x18160ddd&tag=latest&apikey=${API_KEY}`,
  },

  {
    title: "eth_getCode",
    path: `${BASE_URI}module=proxy&action=getCode&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&tag=latest&apikey=${API_KEY}`,
  },

  {
    title: "eth_getStorageAt",
    path: `${BASE_URI}module=proxy&action=getStorageAt&address=0x1fcba3cb797465f38839f48ca7c9cda9d9aac28b&position=0x0&tag=latest&apikey=${API_KEY}`,
  },

  {
    title: "eth_gasPrice",
    path: `${BASE_URI}module=proxy&action=gasPrice&apikey=${API_KEY}`,
  },
  {
    title: "eth_estimateGas",
    path: `${BASE_URI}module=proxy&action=estimateGas&data=0x40c10f1900000000000000000000000075ecd1ab06c4e34763a47e1033e80de614d09fa4000000000000000000000000000000000000000000000000000000014b1a92c0&to=0x715aa09e6950ffdbda55cea77f72dd7f52ae1a62&value=0x0&gasPrice=0x430E23400&gas=0xF4240&apikey=${API_KEY}`,
  },
];

// TODO: NFT APIs
