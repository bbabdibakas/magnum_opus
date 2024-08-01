import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './CreatePostForm.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { createPostFormActions } from '../../model/slice/createPostSlice'
import { createPost } from '../../model/services/createPost'
import { getCreatePostFormContent } from '../../model/selectors/getCreatePostFormContent/getCreatePostFormContent'
import { getCreatePostFormErrorMessage } from '../../model/selectors/getCreatePostFormErrorMessage/getCreatePostFormErrorMessage'
import { getCreatePostFormIsLoading } from '../../model/selectors/getCreatePostFormIsLoading/getCreatePostFormIsLoading'
import { AppTextArea } from 'shared/ui/AppTextArea/AppTextArea'

const CreatePostForm = () => {
    const dispatch = useDispatch()

    const content = useSelector(getCreatePostFormContent)
    const isLoading = useSelector(getCreatePostFormIsLoading)
    const errorMessage = useSelector(getCreatePostFormErrorMessage)

    const onChangeContent = useCallback((value: string) => {
        dispatch(createPostFormActions.onSetContent(value))
    }, [dispatch])

    const onSubmit = useCallback(async () => {
        //@ts-ignore
        await dispatch(createPost(content))
    }, [dispatch, content])

    return (
        <div className={cls.CreatePostForm}>
            <div className={cls.title}>
                New post
            </div>
            <AppTextArea
                value={content}
                onChange={onChangeContent}
            />
            <AppButton
                onClick={onSubmit}
                theme={AppButtonTheme.PRIMARY}
                className={cls.button}
                disabled={isLoading}
            >
                {
                    isLoading ? 'Loading..' : 'Post'
                }
            </AppButton>
            {errorMessage}
        </div>
    )
}

export default CreatePostForm