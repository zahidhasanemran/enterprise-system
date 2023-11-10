import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const ConversationForm = ({ form, onSubmit, isLoading }: any) => {
  return (
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
                  placeholder="How do I calculate the radius of a circle?"
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
  )
}

export default ConversationForm
