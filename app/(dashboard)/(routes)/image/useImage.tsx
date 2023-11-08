import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { useProModal } from '@/hooks/useProModal'

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Photo prompt is required',
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
})

const amountOptions = [
  {
    value: '1',
    label: '1 Photo',
  },
  {
    value: '2',
    label: '2 Photos',
  },
  {
    value: '3',
    label: '3 Photos',
  },
  {
    value: '4',
    label: '4 Photos',
  },
  {
    value: '5',
    label: '5 Photos',
  },
]

const resolutionOptions = [
  {
    value: '256x256',
    label: '256x256',
  },
  {
    value: '512x512',
    label: '512x512',
  },
  {
    value: '1024x1024',
    label: '1024x1024',
  },
]

const useImage = () => {
  const proModal = useProModal()
  const router = useRouter()
  const [photos, setPhotos] = useState<string[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      amount: '1',
      resolution: '512x512',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([])

      const response = await axios.post('/api/image', values)

      const urls = response.data.map((image: { url: string }) => image.url)

      setPhotos(urls)
    } catch (error: any) {
      if (error?.response?.status === 403) {
        // proModal.onOpen();
      } else {
        toast.error('Something went wrong.')
      }
    } finally {
      router.refresh()
    }
  }

  return {
    router,
    proModal,
    photos,
    setPhotos,
    form,
    isLoading,
    onSubmit,
    amountOptions,
    resolutionOptions,
  }
}

export default useImage
