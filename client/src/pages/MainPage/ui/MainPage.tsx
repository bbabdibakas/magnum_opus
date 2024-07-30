import { AppButton, AppButtonTheme } from "shared/ui/AppButton/AppButton"
import { Navbar } from "widgets/Navbar"
import cls from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div>
            <Navbar>
                <AppButton theme={AppButtonTheme.PRIMARY} className={cls.button}>
                    Login
                </AppButton>
            </Navbar>
            MainPage
        </div>
    )
}

export default MainPage