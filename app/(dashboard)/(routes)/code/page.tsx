'use client'

import { Code } from 'lucide-react'
import { Heading } from '@/components/global/Heading/Heading'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useCode from '@/app/(dashboard)/(routes)/code/useCode'
import GeneratedCodeList from '@/components/Presentational/GeneratedCodeList/GeneratedCodeList'
import withClientAuth from '@/HOC/withClientAuth'

const CodePage = () => {
  const { messages, form, isLoading, onSubmit } = useCode()

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="form-1">
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Simple toggle button using react hooks."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          <GeneratedCodeList isLoading={isLoading} data={messages} />
        </div>
      </div>
    </div>
  )
}

export default withClientAuth(CodePage)
