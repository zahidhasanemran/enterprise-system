'use client'

import withClientAuth from '@/HOC/withClientAuth'
import useConversation from '@/app/(dashboard)/(routes)/conversation/useConversation'
import GeneratedConversationList from '@/components/Presentational/GeneratedConversationList/GeneratedConversationList'
import ConversationForm from '@/components/forms/ConversationForm/ConversationForm'
import { Heading } from '@/components/global/Heading/Heading'
import { MessageSquare } from 'lucide-react'

const ConversationPage = () => {
  const { messages, form, isLoading, onSubmit } = useConversation()

  return (
    <div className="mt-16">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <ConversationForm
            form={form}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </div>
        <div className="space-y-4 mt-4">
          <GeneratedConversationList isLoading={isLoading} data={messages} />
        </div>
      </div>
    </div>
  )
}

export default withClientAuth(ConversationPage)
