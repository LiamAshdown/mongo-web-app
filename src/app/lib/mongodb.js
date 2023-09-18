import { MongoClient } from 'mongodb'

/**
 * Initializes a MongoDB client with the given URI.
 * @param {string} uri - The connection URI for the MongoDB client.
 * @returns {Promise<MongoClient>} A promise that resolves to a MongoClient instance.
 * @throws {Error} If the connection string is missing.
 */
const initialiseClient = async (uri) => {
  const options = {}

  let client
  let clientPromise

  if (!uri) {
    throw new Error('Connection string missing.')
  }

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
  }

  return clientPromise
}

export default initialiseClient
