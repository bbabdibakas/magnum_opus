import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { Navbar } from "widgets/Navbar"
import cls from './MainPage.module.scss'
import { useCallback, useState } from "react"
import { AuthModal } from "features/authByUsername"
import { useDispatch, useSelector } from "react-redux"
import { getUserData, userActions } from "entities/User"

const MainPage = () => {
    const dispatch = useDispatch()
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    const userData = useSelector(getUserData)

    const onLogout = useCallback(() => {
        dispatch(userActions.onRemoveUserData())
    }, [dispatch])

    if (userData) {
        return (
            <div>
                <Navbar>
                    <AppButton
                        theme={AppButtonTheme.CLEAR}
                        className={cls.button}
                        onClick={onLogout}
                    >
                        Logout
                    </AppButton>
                </Navbar>
                MainPage
            </div>
        )
    }

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            <Navbar>
                <AppButton
                    theme={AppButtonTheme.PRIMARY}
                    className={cls.button}
                    onClick={onModalOpen}
                >
                    Login
                </AppButton>
            </Navbar>
            MainPage
            {isModalOpen && <AuthModal isModalOpen={isModalOpen} onClose={onModalClose} />}
        </div>
    )
}

export default MainPage