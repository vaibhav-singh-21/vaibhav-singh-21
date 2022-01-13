const { ethers } = require("hardhat")

async function main() {
    console.log("Starting the deployment..........");
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contract from account: ${deployer.address}\n`);

    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}\n`);

    const Token = await ethers.getContractFactory('myToken');
    const token = await Token.deploy("TOKEN", "TKN");
    console.log(`Token address: ${token.address}\n`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log("Error: ");
        console.error(error);
        process.exit(1);
    })