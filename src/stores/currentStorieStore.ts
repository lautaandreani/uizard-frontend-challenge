import { Storie } from '@/models/types'
import { create } from 'zustand'

interface CurrentStorie {
  currentUrl: Storie['url']
  setUrl: (url: Storie['url']) => void
}

export const useCurrentStorie = create<CurrentStorie>((set) => ({
  currentUrl: '',
  setUrl: (url) => set(() => ({ currentUrl: url })),
}))
