'use client'

import withClientAuth from '@/HOC/withClientAuth'
import useCode from '@/app/(dashboard)/(routes)/code/useCode'
import GeneratedCodeList from '@/components/Presentational/GeneratedCodeList/GeneratedCodeList'
import CodeForm from '@/components/forms/CodeForm/CodeForm'
import { Heading } from '@/components/global/Heading/Heading'
import { Code } from 'lucide-react'

const CodePage = () => {
  const {
    messages,
    handleSubmit,
    isLoading,
    onSubmit,
    // defaultValues,
    ...rest
  } = useCode()

  return (
    <div className="mt-16">
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <CodeForm
            //@ts-ignore
            handleFunc={handleSubmit}
            isLoading={isLoading}
            onSubmitFunc={onSubmit}
            {...rest}
          />
        </div>
        <div className="space-y-4 mt-4">
          <GeneratedCodeList isLoading={isLoading} data={messages} />
        </div>
      </div>
    </div>
  )
}

export default withClientAuth(CodePage)
