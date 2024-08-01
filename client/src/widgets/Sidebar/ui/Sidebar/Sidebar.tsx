import cls from './Sidebar.module.scss'
import { useLocation } from "react-router-dom"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'

export const Sidebar = () => {
    const location = useLocation()
    const sidebarItems = useSelector(getSidebarItems)

    return (
        <div className={cls.Sidebar}>
            {
                sidebarItems.map((item) => (
                    <SidebarItem item={item} location={location.pathname} key={item.path} />
                ))
            }
        </div>
    )
}