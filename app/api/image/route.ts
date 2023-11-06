import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  try {
    const session = await getServerSession()

    const body = await req.json()
    const { prompt, amount = 1, resulation = '512x512' } = body

    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('Open ai key not configured', { status: 500 })
    }

    if (!prompt) {
      return new NextResponse('Prompt are required', { status: 400 })
    }
    if (!amount) {
      return new NextResponse('amount are required', { status: 400 })
    }
    if (!resulation) {
      return new NextResponse('resulation are required', { status: 400 })
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resulation,
    })

    return NextResponse.json(response.data.data)

    // end of try
  } catch (error) {
    console.log('Image Error', error)
    return new NextResponse('Internal Error A', { status: 500 })
  }
}
