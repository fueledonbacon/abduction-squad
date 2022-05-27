import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";
import deployArgs from "./arguments";

async function main() {

  
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Contract : ContractFactory = await ethers.getContractFactory("AbductionSquad");
  const contractInstance : Contract = await Contract.deploy();
  console.log("Starting deploy")
  await contractInstance.deployed();

  console.log("Contract's address: " + contractInstance.address);
  console.log("Transaction hash: " + contractInstance.deployTransaction.hash);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error);
      process.exit(1);
    }
  );
