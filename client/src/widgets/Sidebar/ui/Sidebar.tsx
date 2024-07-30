import { AppLink } from "shared/ui/AppLink/AppLink"
import cls from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={cls.Sidebar}>
            <AppLink to="/" className={cls.link}>Main</AppLink>
            <AppLink to="/profile" className={cls.link}>Profile</AppLink>
        </div>
    )
}