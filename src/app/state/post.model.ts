export interface PostContent {
  title: string
  summary: string
  slug: string
  images: string[]
  details: string
  author: string
  publishDate: string|Date
}
export interface Post {
  postID: string
  appID: string
  clientID: string
  createDate: Date| string
  post: PostContent
}

export function createPost(params: Partial<Post>) {
  return {

  } as Post;
}
