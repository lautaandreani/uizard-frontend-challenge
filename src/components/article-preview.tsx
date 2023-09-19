'use client'
import { useCurrentStorie } from '@/stores/currentStorieStore'

export function ArticlePreview() {
  const store = useCurrentStorie()

  if (!store.currentUrl) return <h3 className='text-center mt-4 text-stone-400'>Here you can see the articles</h3>
  return (
    <div className='h-full'>
      <iframe src={store.currentUrl} className='h-full w-full'></iframe>
    </div>
  )
}
