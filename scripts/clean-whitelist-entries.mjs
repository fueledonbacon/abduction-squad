import fs from 'fs';
const fp = fs.promises;

import path from 'path';
import {utils} from 'ethers';

let whitelistDir = path.resolve('./assets/json/')

const getJSON = async (name) => {
    let result = await fp.readFile(name)
    result = result.toString('utf8')
    result = JSON.parse(result)
    return result
}

const thelist = await getJSON(path.resolve(whitelistDir, 'sourceList.json'))
let set = new Set()
let badApples = []
for (const item of thelist){
    try{
        const address = utils.getAddress(item)
        set.add(address)
    } catch (e){
        console.log(e)
        badApples.push(item)
    }
}

const newlist = Array.from(set)
console.log('good apples ', newlist.length)
console.log('bad apples ', badApples.length)
await fp.writeFile(path.resolve(whitelistDir, 'badaddress.json'), JSON.stringify(badApples), { encoding: 'utf8' })
await fp.writeFile(path.resolve(whitelistDir, 'whitelist.json'), JSON.stringify(newlist), { encoding: 'utf8' })
