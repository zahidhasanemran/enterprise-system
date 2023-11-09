import axios from 'axios'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useProModal } from '@/hooks/useProModal'

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required.',
  }),
})

const useCode = () => {
  const router = useRouter()
  const proModal = useProModal()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, defaultValues },
    ...rest
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  })

  const isLoading = isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: values.prompt,
      }
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/code', { messages: newMessages })
      setMessages(current => [...current, userMessage, response.data])

      reset()
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

  return {
    router,
    proModal,
    messages,
    setMessages,
    handleSubmit,
    isLoading,
    onSubmit,
    defaultValues,
    ...rest,
  }
}

export default useCode
