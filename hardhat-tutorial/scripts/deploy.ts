import { ethers } from "hardhat";
import "dotenv/config";
import { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } from "../constants";

// * Deployed at: 0x380b6543D68Ac94Bc72E28A3C3e84c4Cc39d9b28

async function main() {
    // Address of the Crypto Devs NFT contract that you deployed in the previous module
    // It's a constructor for our `CryptoDevToken` contract we're about to deploy
    const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

    /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so cryptoDevsTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
    //  I'd prefer calling it "cryptoDevsTokenFactory"
    // Hardhat's ethers version has `getContractFactory` which only takes in the contract name
    // unlike vanilla ethers, where in `ContractFactory` you have to provide `abi`, `bytecode` & `signer`
    // Which requires us to compile the contract first. Hardhat = simpler.
    const cryptoDevsTokenContract = await ethers.getContractFactory("CryptoDevToken");

    // deploy the contract
    // I'd prefer calling it `cryptoDevsTokenContract`
    const deployedCryptoDevsTokenContract = await cryptoDevsTokenContract.deploy(cryptoDevsNFTContract);

    // print the address of the deployed contract
    console.log("Deployed deployedCryptoDevsTokenContract at", deployedCryptoDevsTokenContract.address);
}

// Call the main function and catch if there are any errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
