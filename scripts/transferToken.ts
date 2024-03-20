import { ethers } from 'hardhat'

async function main() {
    const toAddress = ''
    const contractAddress = ''

    console.log('Sending JOSE404 token...')
    const my404 = await ethers.getContractAt('JOSE404', contractAddress)

    const tx = await my404.transfer(toAddress, ethers.parseEther('20'))
    tx.wait()
    console.log(`Tx hash for sending My404 token: ${tx.hash}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})