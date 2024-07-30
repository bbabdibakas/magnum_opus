import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import { AppInput } from 'shared/ui/AppInput/AppInput'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { authFormActions } from '../../model/slice/authFormSlice'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword/getAuthFormPassword'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername/getAuthFormUsername'
import { getAuthFormIsLoading } from '../../model/selectors/getAuthFormIsLoading/getAuthFormIsLoading'
import { getAuthFormErrorMessage } from '../../model/selectors/getAuthFormErrorMessage/getAuthFormErrorMessage'
import { authByUsername } from '../../model/services/authByUsername'

const AuthForm = () => {
    const dispatch = useDispatch()

    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)
    const isLoading = useSelector(getAuthFormIsLoading)
    const errorMessage = useSelector(getAuthFormErrorMessage)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.onSetUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.onSetPassword(value))
    }, [dispatch])

    const onLogin = useCallback(async () => {
        //@ts-ignore
        await dispatch(authByUsername({ username, password }))
    }, [dispatch, username, password])

    return (
        <div className={cls.AuthForm}>
            <div className={cls.title}>
                Welcome to Wavion
            </div>
            <AppInput
                placeholder='Username'
                value={username}
                onChange={onChangeUsername}
            />
            <AppInput
                placeholder='Password'
                value={password}
                onChange={onChangePassword}
            />
            <AppButton
                onClick={onLogin}
                theme={AppButtonTheme.PRIMARY}
                className={cls.button}
                disabled={isLoading}
            >
                {
                    isLoading ? 'Loading..' : 'Login'
                }
            </AppButton>
            {errorMessage}
        </div>
    )
}

export default AuthForm