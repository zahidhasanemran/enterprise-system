import { Empty } from '@/components/global/Empty/Empty'
import { Loader } from '@/components/global/Loader/Loader'
import { Button } from '@/components/ui/button'
import { Card, CardFooter } from '@/components/ui/card'
import { Download } from 'lucide-react'
import Image from 'next/image'

interface ImagesListProps {
  data: string[]
  isLoading: boolean
}

const GeneratedImageList = ({ data, isLoading }: ImagesListProps) => {
  {
    isLoading && (
      <div className="p-20">
        <Loader />
      </div>
    )
  }
  {
    data.length === 0 && !isLoading && <Empty label="No images generated." />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
      {data.map(src => (
        <Card key={src} className="rounded-lg overflow-hidden">
          <div className="relative aspect-square">
            <Image fill alt="Generated" src={src} />
          </div>
          <CardFooter className="p-2">
            <Button
              onClick={() => window.open(src)}
              variant="secondary"
              className="w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default GeneratedImageList
