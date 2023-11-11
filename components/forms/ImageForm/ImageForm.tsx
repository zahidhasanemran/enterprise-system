import {
  amountOptions,
  resolutionOptions,
} from '@/app/(dashboard)/(routes)/image/useImage'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ImageForm = ({ form, onSubmit, isLoading }: any) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="
        rounded-lg 
        border 
        w-full 
        p-4 
        px-3 
        md:px-6 
        focus-within:shadow-sm
        grid
        grid-cols-12
        gap-2
      "
      >
        <FormField
          name="prompt"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-6">
              <FormControl className="m-0 p-0">
                <Input
                  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder="A picture of a horse in Swiss alps"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-2">
              <Select
                disabled={isLoading}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                data-testid="combobox"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {amountOptions?.map((option: any) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resolution"
          render={({ field }) => (
            <FormItem className="col-span-12 lg:col-span-2">
              <Select
                disabled={isLoading}
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
                data-testid="combobox2"
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={field.value} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {resolutionOptions?.map((option: any) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export default ImageForm
