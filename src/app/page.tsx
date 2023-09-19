import { getTopStories } from '@/api/api'
import { ArticlePreview } from '@/components/article-preview'
import { CardNews } from '@/components/card-news'
import { NavBar } from '@/components/navbar'

export default async function Home() {
  const stories = await getTopStories()

  return (
    <main className='h-full'>
      <NavBar />

      <div className='flex h-full'>
        <aside className='min-w-[25%] border-r border-gray overflow-y-auto'>
          {stories.map((storie) => <CardNews key={storie} storie={storie}/>)}
        </aside>

        <article className='w-full'>
          <ArticlePreview />
        </article>
      </div>
    </main>
  )
}
