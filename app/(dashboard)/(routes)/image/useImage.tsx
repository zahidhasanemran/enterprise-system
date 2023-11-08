import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { useProModal } from '@/hooks/useProModal'

import { formSchema } from './validation'

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

  return { router, proModal, photos, setPhotos, form, isLoading, onSubmit }
}

export default useImage
