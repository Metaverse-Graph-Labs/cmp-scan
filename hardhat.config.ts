import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    caduceus: {
      url: "https://mainnet.block.caduceus.foundation/",
      accounts: [process.env.PRIV_KEY],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [process.env.PRIV_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      caduceus: process.env.CMP_API_KEY,
    },
    customChains: [
      {
        network: "caduceus",
        chainId: 256256,
        urls: {
          apiURL: "https://cmpscan.io/api",
          browserURL: "https://cmpscan.io",
        },
      },
    ],
  },
};

export default config;
