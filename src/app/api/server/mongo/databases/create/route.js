import initialiseClient from '@/app/lib/mongodb'

export async function POST(request) {
  try {


    // Log the body
    console.log(await request.json())
  } catch {

  }
}
