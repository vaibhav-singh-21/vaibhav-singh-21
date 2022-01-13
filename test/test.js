const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("myToken NFT Tests:", function() {
    let token;
    beforeEach(async () => {
        const Token = await ethers.getContractFactory("myToken");
        token = await Token.deploy("TOKEN", "TKN");
    });

    it("NFT is minted successfully", async function() {
        [deployer] = await ethers.getSigners();
        expect(await token.balanceOf(deployer.address)).to.equal(0);

        await token.connect(deployer).mint();
        expect(await token.balanceOf(deployer.address)).to.equal(1);
    })

})
