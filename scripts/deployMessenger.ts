import { ethers } from "hardhat";

async function main() {
  const Messenger = await ethers.getContractFactory("Messenger");
  const messenger = await Messenger.deploy();

  await messenger.deployed();

  console.log(`Messenger deployed to ${messenger.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
