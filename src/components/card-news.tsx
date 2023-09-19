'use client'
import { useEffect, useState } from 'react'
import { getStoriesById } from '@/api/api'
import { Storie } from '@/models/types'
import { useCurrentStorie } from '@/stores/currentStorieStore'
import { catchErrors } from '@/lib/utils'

export function CardNews({ storie }: { storie: number }) {
  const [storieById, setStorieById] = useState<Storie>()
  const [loading, setLoading] = useState<null | boolean>(true)

  const store = useCurrentStorie()
  const isActive = store.currentUrl === storieById?.url

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getStoriesById(storie)
        setStorieById(response)
        return response
      } catch (error) {
        catchErrors(error)
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  if (!storieById && loading)
    return (
      <div className='border-b border-gray hover:bg-soft_gray transition p-4 min-h-[5.5rem] block animate-pulse bg-soft_gray my-1'></div>
    )

  if (storieById) {
    return (
      <div
        className={`flex flex-col border-b border-gray hover:bg-soft_gray transition p-4 ${
          isActive ? 'bg-brand text-black hover:text-white' : ''
        }`}
      >
        <h3 className='font-semibold'>{storieById.title}</h3>
        <span className='flex items-center justify-between text-sm'>
          <p className={`${isActive ? 'text-white' : 'text-stone-400'}`}>Posted by: {storieById.by}</p>
          {storieById.url ? (
            <span role='link' onClick={() => store.setUrl(storieById.url)} className='text-xs hover:text-brand cursor-pointer'>
              Visit website &gt;&gt;
            </span>
          ) : (
            ''
          )}
        </span>
      </div>
    )
  }
}
