import { expect } from 'chai'
import { ethers } from 'hardhat'
import deployArgs from '../scripts/arguments'
// import * as addresses from "../assets/json/whitelist.json";
import {
	createMerkleRoot,
	createMerkleProof,
	verifyMerkleProof,
} from '../scripts/merkleTree'
const payerAddress = '0xbcd4042de499d14e55001ccbb24a551f3b954096'
const ipfs = 'ipfs://QmYfsUQEdmaaw8zDmR8qR7Cua6dakPGBuXsAPks7pedX4u/'
describe('ABDUCTION SQUAD:', function () {
	it('Should be in whitelist', async function () {
		const addresses = [
			'0xcd46640FbE83642607234663e1de4728C9dBFeBF',
			'0xC45F7C10bD2B6A171297dB2204Ad98b10b8a62a8',
			'0x1ef402a94aA20B5EC99D7E9bF80C7ec51E5caC0B',
			'0x89bF3AdD44784F157fc586BDaDACE514df8Ea452',
		]
		const merkleRoot = await createMerkleRoot(addresses)
		const merkleProof = await createMerkleProof(addresses, addresses[2])

		console.log( merkleRoot)

		const NFT = await ethers.getContractFactory('AbductionSquad')
		const nft = await NFT.deploy(payerAddress, merkleRoot, merkleRoot, ipfs)
		await nft.deployed()
		const [_, minter] = await ethers.getSigners()
		await nft.connect(minter).verifyWhitelist(merkleProof, addresses[2])
	})
})
