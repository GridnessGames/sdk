async function main() {
  const Contract = await ethers.getContractFactory("PredictionMarket");
  const contract = await Contract.deploy();

  await contract.waitForDeployment();

  console.log("Deployed to:", await contract.getAddress());
}

main();
