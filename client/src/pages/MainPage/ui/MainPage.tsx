import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { Navbar } from "widgets/Navbar"
import cls from './MainPage.module.scss'
import { useState } from "react"
import { AuthModal } from "features/authByUsername"

const MainPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

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