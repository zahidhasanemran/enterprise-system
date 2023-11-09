import { render, screen, waitFor } from '@testing-library/react'
import GeneratedImageList from './GeneratedImageList'

describe('GeneratedImageList', () => {
  //
  it('render loading', () => {
    render(<GeneratedImageList data={[]} isLoading={true} />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })
  //
  it('render data', async () => {
    const images = [
      'https://i.ibb.co/h8jg1mY/logo.png',
      'https://i.ibb.co/ZKVmRvd/empty.png',
    ]
    render(<GeneratedImageList data={images} isLoading={false} />)
    images.forEach((src, i) => {
      waitFor(() => {
        expect(screen.getByAltText(`Generated${i}`)).toHaveAttribute('src', src)
      })
    })
  })
  //
  it('render no data', async () => {
    render(<GeneratedImageList data={[]} isLoading={false} />)
    waitFor(() => {
      expect(screen.getByText(`No images generated.`)).toBeInTheDocument()
    })
  })
})
