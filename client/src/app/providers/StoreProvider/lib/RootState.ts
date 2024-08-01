import { PostState } from "entities/Post";
import { ProfileState } from "entities/Profile";
import { UserState } from "entities/User";
import { AuthFormState } from "features/authByUsername";
import { CreatePostFormState } from "features/createPost";

export interface RootState {
    user: UserState
    authForm: AuthFormState
    profile: ProfileState
    post: PostState
    createPostForm: CreatePostFormState
}
