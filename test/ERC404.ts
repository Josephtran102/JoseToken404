import { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers'
import { expect } from 'chai'
import { ethers } from 'hardhat'
import { My404 } from '../typechain-types'

describe('JOSE404', function () {
    let my404: My404
    let owner: SignerWithAddress
    let addr1: SignerWithAddress
    let addr2: SignerWithAddress

    beforeEach(async function () {
        // Get signers
        ;[owner, addr1, addr2] = await ethers.getSigners()

        // Deploy the My404 contract
        my404 = await ethers.deployContract('JOSE404', [owner.address], owner)
    })

    it('Should set the right owner', async function () {
        expect(await my404.owner()).to.equal(owner.address)
    })

    it('Should update baseTokenURI', async function () {
        const newURI = 'ipfs://newBaseURI/'
        await my404.connect(owner).setTokenURI(newURI)
        expect(await my404.baseTokenURI()).to.equal(newURI)
    })

    it('Should revert when non-owner tries to set baseTokenURI', async function () {
        const newURI = 'ipfs://newBaseURI/'
        await expect(
            my404.connect(addr1).setTokenURI(newURI)
        ).to.be.revertedWithCustomError(my404, 'Unauthorized')
    })

    it('Should update dataURI', async function () {
        const newDataURI = 'ipfs://newDataURI/'
        await my404.connect(owner).setDataURI(newDataURI)
        expect(await my404.dataURI()).to.equal(newDataURI)
    })

    it('Should revert when non-owner tries to set dataURI', async function () {
        const newDataURI = 'ipfs://newDataURI/'
        await expect(
            my404.connect(addr1).setDataURI(newDataURI)
        ).to.be.revertedWithCustomError(my404, 'Unauthorized')
    })

    it('Should update name and symbol', async function () {
        const newName = 'NewName'
        const newSymbol = 'NN'
        await my404.connect(owner).setNameSymbol(newName, newSymbol)
        expect(await my404.name()).to.equal(newName)
        expect(await my404.symbol()).to.equal(newSymbol)
    })

    it('Should revert when non-owner tries to set name and symbol', async function () {
        const newName = 'NewName'
        const newSymbol = 'NN'
        await expect(
            my404.connect(addr1).setNameSymbol(newName, newSymbol)
        ).to.be.revertedWithCustomError(my404, 'Unauthorized')
    })

    it('Should return the correct tokenURI', async function () {
        const baseTokenURI = 'ipfs://baseTokenURI/'
        await my404.connect(owner).setTokenURI(baseTokenURI)
        const tokenId = 1 // Example token ID
        expect(await my404.tokenURI(tokenId)).to.equal(baseTokenURI)
    })
})