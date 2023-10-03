import initialiseClient from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    // Test the connection
    const client = await initialiseClient(searchParams.get('connectionString'), true)
    const response = await client.db('admin').command({ ping: 1 })

    if (!response.ok) {
      throw new Error(`Connection failed with status ${response.status}`)
    }

    return NextResponse.json({
      connectionString: searchParams.get('connectionString')
    })
  } catch (error) {
    return NextResponse.error(error)
  }
}
