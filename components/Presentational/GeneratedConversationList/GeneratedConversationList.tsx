import { BotAvatar } from '@/components/global/BotAvatar/BotAvatar'
import { cn } from '@/lib/utils'
import { Empty } from '@/components/global/Empty/Empty'
import { Loader } from '@/components/global/Loader/Loader'
import { UserAvatar } from '@/components/global/UserAvatar/UserAvatar'
import { ChatCompletionRequestMessage } from 'openai'

interface ConversionListProps {
  isLoading: boolean
  data: ChatCompletionRequestMessage[]
}

const GeneratedConversationList = ({
  isLoading,
  data,
}: ConversionListProps) => {
  if (isLoading) {
    return (
      <div
        data-testid="chat-loading"
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
          <p className="text-sm">{message.content}</p>
        </div>
      ))}
    </div>
  )
}

export default GeneratedConversationList
