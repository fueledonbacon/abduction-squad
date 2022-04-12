import { MongoClient, ServerApiVersion } from 'mongodb'

const URI = process.env.MONGODB_URL;
const client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = 'phunky'

export const getUserID = async (ethAddressVerified) => {
  return new Promise(async (resolve, reject) => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    const document = await collection.find({ ethAddress: ethAddressVerified }).toArray();
    await client.close();
    return resolve(document[0].userID);
  })
}

export const getUser = async (ethAddress) => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  const document = await collection.findOne({ ethAddress });
  await client.close();
  return document;
}

export const userHasRedeemed = async (ethAddress) => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  const document = await collection.findOne({ ethAddress, redeemed: true });
  await client.close();

  return document !== null;
}

export const redeem = async (ethAddress) => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  const result = await collection.updateOne({ ethAddress }, { $set: { redeemed: true } }, { upsert: true });
  await client.close();

  const updateSuccessful = result.matchedCount && result.modifiedCount;
  return updateSuccessful;
}

export const createNewUser = async (ethAddress) => {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  await collection.insertOne({ ethAddress, redeemed: false });
  await client.close();
  return 'Done.'
}


export const setUserData = async (ethAddress, userID) => {
  return new Promise(async (resolve, reject) => {
    ;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('users');

    await collection.insertOne({ ethAddress, userID });
    await client.close();
    return resolve('Done.');
  })
}
