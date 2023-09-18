import initialiseClient from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    // Test the connection
    const client = await initialiseClient(searchParams.get('connectionString'), true)
    await client.db('admin').command({ ping: 1 })
  } catch (error) {
    return NextResponse.error(error)
  }

  return NextResponse.json({
    connectionString: searchParams.get('connectionString')
  })
}
