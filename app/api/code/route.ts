import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_OPEN_AI_KEY,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
  role: 'system',
  content:
    'You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.',
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession()

    const body = await req.json()
    const { messages } = body

    if (!session?.user?.email) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('Open ai key not configured', { status: 500 })
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    })

    return NextResponse.json(response.data.choices[0].message)

    // end of try
  } catch (error) {
    console.log('CODE_ERROR', error)
    return new NextResponse('Internal Error A', { status: 500 })
  }
}
