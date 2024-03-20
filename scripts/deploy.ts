// Importing necessary functionalities from the Hardhat package.
import { ethers } from 'hardhat'

async function main() {
    // Retrieve the first signer, typically the default account in Hardhat, to use as the deployer.
    const [deployer] = await ethers.getSigners()

    console.log('Contract is deploying...')
    // Deploying the My404 contract, passing the deployer's address as a constructor argument.
    const my404 = await ethers.deployContract('JOSE404', [deployer.address])

    // Waiting for the contract deployment to be confirmed on the blockchain.
    await my404.waitForDeployment()

    // Logging the address of the deployed My404 contract.
    console.log(`JOSE404 contract is deployed. Token address: ${my404.target}`)

    console.log('Deployer address is being whitelisted...')
    // Calling the setWhitelist function of the deployed contract to whitelist the deployer's address.
    // This enables the deployer to transfer tokens without having corresponding NFTs,
    // essential for initial setup or specific operational exceptions.
    const tx = await my404.setWhitelist(deployer.address, true)
    await tx.wait() // Waiting for the transaction to be mined.
    console.log(`Tx hash for whitelisting deployer address: ${tx.hash}`)
}

// This pattern allows the use of async/await throughout and ensures that errors are caught and handled properly.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})