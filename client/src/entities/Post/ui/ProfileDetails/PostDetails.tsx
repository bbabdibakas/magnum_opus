import cls from './PostDetails.module.scss'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { getPostData } from 'entities/Post/model/selectors/getPostData/getPostData'
import { getPostIsLoading } from 'entities/Post/model/selectors/getPostIsLoading/getPostIsLoading'
import { getPostErrorMessage } from 'entities/Post/model/selectors/getPostErrorMessage/getPostErrorMessage'
import { fetchPostDataById } from 'entities/Post/model/services/fetchPostDataById'

interface PostDetailsProps {
    id: string
    className?: string
}

export const PostDetails = (props: PostDetailsProps) => {
    const {
        id,
        className
    } = props

    const dispatch = useDispatch()

    const postData = useSelector(getPostData)
    const isLoading = useSelector(getPostIsLoading)
    const errorMessage = useSelector(getPostErrorMessage)

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchPostDataById(id))
    }, [])

    let content

    if (isLoading) {
        content = (
            <div className={classNames(cls.PostDetails, [className, cls.isLoading])}>
                Loading...
            </div>
        )
    } else if (errorMessage) {
        content = (
            <div className={classNames(cls.PostDetails, [className, cls.errorMessage])}>
                errorMessage
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.PostDetails, [className])}>
                <div className={cls.profile}>
                    <div className={cls.name}>
                        {postData?.profile?.name}
                    </div>
                    <div className={cls.username}>
                        {postData?.profile?.username}
                    </div>
                </div>
                <div className={cls.content}>
                    {postData?.content}
                </div>
            </div>
        )
    }

    return content
}