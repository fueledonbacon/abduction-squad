import { MerkleTree } from  "merkletreejs";
import keccak256 from "keccak256";


export const createMerkleRoot = async (list:  string[]) => {
  const leaves = list.map(x => keccak256(x))
  // const tree = new MerkleTree(leaves, keccak256)
  const merkleTree = new MerkleTree(leaves, keccak256, {sortPairs:true})
  const rootHash = merkleTree.getRoot()
  return rootHash
}

export const createMerkleProof = async (list: string[], address: string) => {
  const leaves = list.map(x => keccak256(x))
  const tree = new MerkleTree(leaves, keccak256)
  const root = tree.getRoot().toString('hex')
  const leaf = keccak256(address)
  const proof = tree.getHexProof(leaf)
  return proof
}

export const verifyMerkleProof = async (list: string[] ,address: string,proof: string[],leaf: string) => {
  const leaves = list.map(x => keccak256(x))
  const tree = new MerkleTree(leaves, keccak256)
  const root = tree.getRoot().toString('hex')
  return tree.verify(proof, leaf, root)
}

