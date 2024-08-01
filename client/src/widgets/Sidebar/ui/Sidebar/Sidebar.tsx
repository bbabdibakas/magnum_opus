import cls from './Sidebar.module.scss'
import { useLocation } from "react-router-dom"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'
import { useState } from 'react'
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { CreatePostModal } from 'features/createPost'

export const Sidebar = () => {
    const location = useLocation()
    const sidebarItems = useSelector(getSidebarItems)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onModalOpen = () => {
        setIsModalOpen(true)
    }

    const onModalClose = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={cls.Sidebar}>
            {
                sidebarItems.map((item) => (
                    <SidebarItem item={item} location={location.pathname} key={item.path} />
                ))
            }
            <AppButton
                className={cls.button}
                theme={AppButtonTheme.PRIMARY}
                onClick={onModalOpen}
            >
                Create Post
            </AppButton>
            {isModalOpen && <CreatePostModal isModalOpen={isModalOpen} onClose={onModalClose} />}
        </div>
    )
}