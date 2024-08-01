import { Profile } from "entities/Profile"

export interface Post {
    id: string
    content: string
    profile: Profile
}

export interface PostState {
    postData?: Post
    isLoading: boolean
    errorMessage?: string
}