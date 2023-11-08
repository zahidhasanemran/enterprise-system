import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import * as z from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useProModal } from '@/hooks/useProModal'
import { formSchema } from './validation'

const useCode = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<any[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/code', { messages: newMessages })
      setMessages(current => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen()
      } else {
        toast.error('Something went wrong.')
      }
    } finally {
      router.refresh()
    }
  }

  return { router, proModal, messages, setMessages, form, isLoading, onSubmit }
}

export default useCode
