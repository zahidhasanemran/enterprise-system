import { render, screen } from '@testing-library/react'
import GeneratedConversationList from './GeneratedConversationList'

describe('GeneratedConversationList', () => {
  it('shows loading state', () => {
    render(<GeneratedConversationList isLoading={true} data={[]} />)
    expect(screen.getByTestId('chat-loading')).toBeInTheDocument()
  })

  it('shows no data state', () => {
    render(<GeneratedConversationList isLoading={false} data={[]} />)
    expect(screen.getByText('No conversation started.')).toBeInTheDocument()
  })

  it('shows no conversation', () => {
    const data = [
      { role: 'user', content: 'Hello!' },
      { role: 'bot', content: 'Hi there!' },
      // Add more test data as needed
    ]
    render(
      <GeneratedConversationList
        isLoading={false}
        //@ts-ignore
        data={data}
      />
    )
    data.forEach(sm => {
      const messageElem = screen.getByText(sm.content)
      const avaterElem =
        sm.role === 'user'
          ? screen.getByTestId('user-avatar')
          : screen.getByTestId('bot-avatar')
      expect(messageElem).toBeInTheDocument()
      expect(avaterElem).toBeInTheDocument()
    })
  })
})
