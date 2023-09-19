import { Storie } from "@/models/types"

const BASE_URL = 'https://hacker-news.firebaseio.com/v0'

export const getTopStories = async (): Promise<number[]> => {
    const stories = await fetch(`${BASE_URL}/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`)
    if (!stories.ok) throw new Error('Error fetching stories')
    return await stories.json()
}

export const getStoriesById = async (storieId: number): Promise<Storie> => {
    const storieById = await fetch(`${BASE_URL}/item/${storieId}.json`)
    if (!storieById.ok) throw new Error('Error fetching storie by id')
    return await storieById.json()
}