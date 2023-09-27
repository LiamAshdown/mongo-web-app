import initialiseClient from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const client = await initialiseClient(searchParams.get('connectionString'))

    // Get the databases
    const databases = await client.db().admin().listDatabases()

    // Get the collection and the indexes
    for (const database of databases.databases) {
      const collections = await client.db(database.name).listCollections().toArray()

      for (const collection of collections) {
        const indexes = await client.db(database.name).collection(collection.name).listIndexes().toArray()
        collection.indexes = indexes
      }

      database.collections = collections
      database.indexes = collections.reduce((acc, collection) => acc + collection.indexes.length, 0)
    }

    return NextResponse.json(databases)
  } catch (error) {
    return NextResponse.error(error)
  }
}
