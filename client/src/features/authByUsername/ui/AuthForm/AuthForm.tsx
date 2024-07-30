import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import cls from './AuthForm.module.scss'
import { AppInput } from 'shared/ui/AppInput/AppInput'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { authFormActions, authFormReducer } from '../../model/slice/authFormSlice'
import { getAuthFormPassword } from '../../model/selectors/getAuthFormPassword/getAuthFormPassword'
import { getAuthFormUsername } from '../../model/selectors/getAuthFormUsername/getAuthFormUsername'

const AuthForm = () => {
    const dispatch = useDispatch()

    const username = useSelector(getAuthFormUsername)
    const password = useSelector(getAuthFormPassword)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(authFormActions.onSetUsername(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(authFormActions.onSetPassword(value))
    }, [dispatch])

    const onLogin = useCallback(() => {
        console.log({ username, password })
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
            >
                Login
            </AppButton>
        </div>
    )
}

export default AuthForm