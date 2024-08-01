import { AppLink } from "shared/ui/AppLink/AppLink"
import cls from './Sidebar.module.scss'
import { useLocation } from "react-router-dom"
import MainPageActiveIcon from 'shared/assets/icons/MainPageActive.svg'
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfilePageActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'

export const Sidebar = () => {
    const location = useLocation()
    return (
        <div className={cls.Sidebar}>
            <AppLink to="/" className={`${cls.link} ${location.pathname === '/' ? cls.activeLink : undefined}`} animationClassName={cls.clicked}>
                {location.pathname === '/' ? <MainPageActiveIcon className='icon' /> : <MainPageIcon className='icon' />}
                <div className={cls.label}>
                    Main
                </div>
            </AppLink>
            <AppLink to="/profile" className={`${cls.link} ${location.pathname === '/profile' ? cls.activeLink : undefined}`} animationClassName={cls.clicked}>
                {location.pathname === '/profile' ? <ProfilePageActiveIcon className='icon' /> : <ProfilePageIcon className='icon' />}
                <div className={cls.label}>
                    Profile
                </div>
            </AppLink>
            <AppLink to="/post" className={`${cls.link} ${location.pathname === '/post' ? cls.activeLink : undefined}`} animationClassName={cls.clicked}>
                {location.pathname === '/post' ? <ProfilePageActiveIcon className='icon' /> : <ProfilePageIcon className='icon' />}
                <div className={cls.label}>
                    TEST POST
                </div>
            </AppLink>
        </div>
    )
}