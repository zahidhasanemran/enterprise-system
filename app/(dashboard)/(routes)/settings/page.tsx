import { Heading } from '@/app/components/global/Heading/Heading'
import { SubscriptionButton } from '@/app/components/global/SubscriptionBtn/SubscriptionBtn'
import { checkSubscription } from '@/app/lib/subscription'
import { Settings } from 'lucide-react'
import React from 'react'

const SettingsPage = async () => {
  const isPro = await checkSubscription()

  return (
    <div className="mt-16">
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? 'You are currently on a Pro plan.'
            : 'You are currently on a free plan.'}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}

export default SettingsPage
