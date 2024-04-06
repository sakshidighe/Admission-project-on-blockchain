require("@nomicfoundation/hardhat-toolbox");
/**@type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url:`https://eth-sepolia.g.alchemy.com/v2/wVyFsZyXbblrcurRDemvOmF1kBz4dqGi`,
      accounts: [`0c802b36b5df7928cad972ae401d7cb950a6c7a7e57f91e155a9e03b6ddd89c2`],
    }
  },
  etherscan:{
    apiKey:{
      sepolia:`wVyFsZyXbblrcurRDemvOmF1kBz4dqGi`
  
    }
  }
};
