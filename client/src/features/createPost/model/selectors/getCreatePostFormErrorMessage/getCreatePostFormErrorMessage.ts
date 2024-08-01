import { RootState } from "app/providers/StoreProvider";

export const getCreatePostFormErrorMessage = (state: RootState) => state.createPostForm.errorMessage