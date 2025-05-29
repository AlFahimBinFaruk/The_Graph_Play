const { ethers } = require("hardhat");
require("dotenv").config();

const CONTRACT_ADDRESS = "0x8d3748A35dD777Ff4750fDCDc6948E49c557b511";

const main = async () => {
    const [deployer] = await ethers.getSigners();
    const contract = await ethers.getContractAt("Task3", CONTRACT_ADDRESS, deployer);

    const id = 1; 
    const hash = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd";

    const tx = await contract.update(id, hash);
    console.log("Transaction sent. Hash:", tx.hash);
    await tx.wait();
    console.log("Update hash set successfully!");
};

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
