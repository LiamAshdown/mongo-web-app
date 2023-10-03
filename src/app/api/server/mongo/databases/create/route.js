import initialiseClient from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { form, connectionString } = await request.json()

    // Create the database
    const client = await initialiseClient(connectionString)
    const database = await client.db(form.databaseName).createCollection(form.collectionName)

    return NextResponse.json({
      message: 'Database created successfully'
    })
  } catch (error) {
    // Respond with 422
    return NextResponse.json({
      error: error.message
    }, {
      status: 422
    })
  }
}
