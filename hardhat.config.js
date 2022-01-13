/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");

INFURA_RINKEBY_URL = "https://rinkeby.infura.io/v3/cf07f7b3894f490ab50c554e804d1827"
PRIVATE_KEY = "0x34E10462C87AC04f2b060f5Fcd619c7e8388ba27"

 module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: INFURA_RINKEBY_URL,
      account: PRIVATE_KEY
    }
  }
};