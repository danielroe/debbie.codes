export type Sections = 'blog' | 'podcasts' | 'videos' | 'courses'

export interface Video {
  video: string
  title: string
  start?: number
  date: string
  host?: string
  conference?: string
  tags: string[]
  _path: string
}

export interface Podcast {
  title: string
  date: string
  description: string
  url: string
  tags: string[]
  host: string
  provider: string
  image: string
  _path: string
}

export interface Course {
  title: string
  date: string
  description: string
  url: string
  tags: string[]
  provider: string
  image: string
  platform: string
  _path: string
}

export interface BlogPost {
  title: string
  date: string
  description: string
  url?: string
  image: string
  alt: string
  ogImage?: string
  provider: string
  tags: string[]
  published?: boolean
  _path: string
}

export interface Navigation {
  url: string
  link: string
}
