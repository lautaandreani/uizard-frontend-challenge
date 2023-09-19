import { toast } from 'sonner'

export const catchErrors = (error: unknown) => {
  if (error instanceof Error) {
    toast.error(error.message)
  }
}
