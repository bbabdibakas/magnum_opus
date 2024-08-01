import { createSelector } from "@reduxjs/toolkit";
import { getUserData } from "entities/User";
import { SidebarItemType } from "../../types/SidebarItemType";
import { routePath } from "app/providers/RouteProvider";
import MainPageActiveIcon from 'shared/assets/icons/MainPageActive.svg'
import MainPageIcon from 'shared/assets/icons/MainPage.svg'
import ProfilePageActiveIcon from 'shared/assets/icons/ProfilePageActive.svg'
import ProfilePageIcon from 'shared/assets/icons/ProfilePage.svg'

export const getSidebarItems = createSelector(
    getUserData, // fix later to add protected routes
    () => {
        const items: SidebarItemType[] = [
            {
                label: 'Main',
                path: routePath.main,
                Icon: MainPageIcon,
                ActiveIcon: MainPageActiveIcon
            },
            {
                label: 'Profile',
                path: routePath.profile,
                Icon: ProfilePageIcon,
                ActiveIcon: ProfilePageActiveIcon
            },
            {
                label: 'Post',
                path: routePath.post,
                Icon: ProfilePageIcon,
                ActiveIcon: ProfilePageActiveIcon
            }
        ]

        return items
    }
)