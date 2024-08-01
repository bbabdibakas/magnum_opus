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
    (userData) => {
        const items: SidebarItemType[] = [
            {
                label: 'Main',
                path: routePath.main,
                Icon: MainPageIcon,
                ActiveIcon: MainPageActiveIcon
            }]

        if (userData) {
            items.push({
                label: 'Profile',
                path: routePath.profile + userData?.profileId,
                Icon: ProfilePageIcon,
                ActiveIcon: ProfilePageActiveIcon
            })

            items.push({
                label: 'Post',
                path: routePath.post + '1', // fix later
                Icon: ProfilePageIcon,
                ActiveIcon: ProfilePageActiveIcon
            })
        }

        return items
    }
)