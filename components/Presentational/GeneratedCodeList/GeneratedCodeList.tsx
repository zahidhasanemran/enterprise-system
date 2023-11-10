import ReactMarkdown from 'react-markdown'
import { BotAvatar } from '@/components/global/BotAvatar/BotAvatar'
import { cn } from '@/lib/utils'
import { Empty } from '@/components/global/Empty/Empty'
import { Loader } from '@/components/global/Loader/Loader'
import { UserAvatar } from '@/components/global/UserAvatar/UserAvatar'
import { ChatCompletionRequestMessage } from 'openai'

interface CodeListProps {
  isLoading: boolean
  data: ChatCompletionRequestMessage[]
}

const GeneratedCodeList = ({ isLoading, data }: CodeListProps) => {
  if (isLoading) {
    return (
      <div
        data-testid="code-loading"
        className="p-8 rounded-lg w-full flex items-center justify-center bg-muted"
      >
        <Loader />
      </div>
    )
  }
  if (data.length === 0 && !isLoading) {
    return <Empty label="No conversation started." />
  }

  return (
    <div className="flex flex-col-reverse gap-y-4">
      {data.map(message => (
        <div
          key={message.content}
          className={cn(
            'p-8 w-full flex items-start gap-x-8 rounded-lg',
            message.role === 'user'
              ? 'bg-white border border-black/10'
              : 'bg-muted'
          )}
        >
          {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
          {/* <ReactMarkdown
            components={{
              pre: ({ node, ...props }) => (
                <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                  <pre {...props} />
                </div>
              ),
              code: ({ node, ...props }) => (
                <code className="bg-black/10 rounded-lg p-1" {...props} />
              ),
            }}
            className="text-sm overflow-hidden leading-7"
          >
            {message.content || ''}
          </ReactMarkdown> */}
        </div>
      ))}
    </div>
  )
}

export default GeneratedCodeList
