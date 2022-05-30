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

const thelist = await getJSON(path.resolve(whitelistDir, 'new-whitelist.json'))
let goodApples = []
let badApples = []
let  j = 0
let  i = 0
for (const item of thelist){
    try {
        
        goodApples.push(utils.getAddress(item))
        i++
    } catch (error) {
        console.log(error)
        j++
    }
}
console.log('Total valid Addresses: '+goodApples.length);
const newlist = [...new Set(goodApples)]
console.log('Repeated Addresses: '+(goodApples.length-newlist.length));



console.log('good addresses ', newlist.length)
console.log('bad addresses ', badApples.length)
await fp.writeFile(path.resolve(whitelistDir, 'badaddress.json'), JSON.stringify(badApples), { encoding: 'utf8' })
await fp.writeFile(path.resolve(whitelistDir, 'whitelist.json'), JSON.stringify(newlist), { encoding: 'utf8' })
