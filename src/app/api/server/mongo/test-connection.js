import initialiseClient from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const client = await initialiseClient(searchParams.get('connectionString'))
  } catch (error) {
    console.log(error)
  }

  return NextResponse.json({
    test: 'test'
  })
}
