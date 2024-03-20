import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.HTTP_PROVIDER_URL_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    berachain: {
      url: process.env.HTTP_PROVIDER_URL_BERA,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  gasReporter: { enabled: true },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  customChains: [
    {
      network: "berachain",
      chainId: 80085,
      urls: {
        apiURL: "https://artio.beratrail.io/",
        browserURL: "https://artio.rpc.berachain.com/"
      }
    }
  ],
  sourcify: {
    enabled: false
  }
};

export default config;
