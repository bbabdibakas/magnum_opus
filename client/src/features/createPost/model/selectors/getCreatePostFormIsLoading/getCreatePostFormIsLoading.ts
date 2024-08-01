import { RootState } from "app/providers/StoreProvider";

export const getCreatePostFormIsLoading = (state: RootState) => state.createPostForm.isLoading