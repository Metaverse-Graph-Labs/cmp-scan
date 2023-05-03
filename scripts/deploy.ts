import { ethers } from "hardhat";

async function main() {
  const GreenToken = await ethers.getContractFactory("GreenToken");
  const greenToken = await GreenToken.deploy();

  await greenToken.deployed();

  console.log(`GREEN deployed to ${greenToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
