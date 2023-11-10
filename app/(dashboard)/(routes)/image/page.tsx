'use client'

import withClientAuth from '@/HOC/withClientAuth'
import useImage from '@/app/(dashboard)/(routes)/image/useImage'
import GeneratedImageList from '@/components/Presentational/GeneratedImageList/GeneratedImageList'
import ImageForm from '@/components/forms/ImageForm/ImageForm'
import { Heading } from '@/components/global/Heading/Heading'
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
import { ImageIcon } from 'lucide-react'

const ImagePage = () => {
  const {
    photos,
    form,
    isLoading,
    onSubmit,
    amountOptions,
    resolutionOptions,
  } = useImage()

  return (
    <div className="mt-16">
      <Heading
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
      <div className="px-4 lg:px-8">
        <ImageForm form={form} onSubmit={onSubmit} />

        {/* *
         * Generated Image Lists
         */}
        <GeneratedImageList
          isLoading={isLoading}
          data={photos}
          //@ts-ignore
          amountOptions={amountOptions}
          resolutionOptions={resolutionOptions}
        />
      </div>
    </div>
  )
}

export default withClientAuth(ImagePage)
