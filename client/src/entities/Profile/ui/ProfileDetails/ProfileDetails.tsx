import cls from './ProfileDetails.module.scss'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { fetchProfileData } from "../../model/services/fetchProfileData"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading"
import { getAuthFormErrorMessage } from "../../model/selectors/getAuthFormErrorMessage/getAuthFormErrorMessage"
import { getUserData } from 'entities/User'
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface ProfileDetailsProps {
    id: string
    className?: string
}

export const ProfileDetails = (props: ProfileDetailsProps) => {
    const {
        id,
        className
    } = props

    const dispatch = useDispatch()

    const userData = useSelector(getUserData)
    const profileData = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const errorMessage = useSelector(getAuthFormErrorMessage)

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchProfileData(id))
    }, [])

    let content

    if (isLoading) {
        content = (
            <div className={classNames(cls.ProfileDetails, [className, cls.isLoading])}>
                Loading...
            </div>
        )
    } else if (errorMessage) {
        content = (
            <div className={classNames(cls.ProfileDetails, [className, cls.errorMessage])}>
                errorMessage
            </div>
        )
    } else if (userData && userData?.profileId === id) {
        content = (
            <div className={classNames(cls.ProfileDetails, [className])}>
                <div>
                    <div className={cls.name}>
                        {profileData?.name}
                    </div>
                    <div className={cls.username}>
                        {profileData?.username}
                    </div>
                    <div className={cls.bio}>
                        {profileData?.bio}
                    </div>
                </div>
                <AppButton theme={AppButtonTheme.OUTLINED} className={cls.button}>
                    Edit profile
                </AppButton>
            </div>
        )
    } else {
        content = (
            <div className={classNames(cls.ProfileDetails, [className])}>
                <div>
                    <div className={cls.name}>
                        {profileData?.name}
                    </div>
                    <div className={cls.username}>
                        {profileData?.username}
                    </div>
                    <div className={cls.bio}>
                        {profileData?.bio}
                    </div>
                </div>
            </div>
        )
    }

    return content
}