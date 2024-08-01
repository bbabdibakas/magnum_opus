import { AppLink } from "shared/ui/AppLink/AppLink"
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from "widgets/Sidebar/model/types/SidebarItemType"
import { classNames } from "shared/lib/classNames/classNames"
import { useState } from "react"

interface SidebarItemProps {
    item: SidebarItemType
    location: string
}

export const SidebarItem = (props: SidebarItemProps) => {
    const {
        item,
        location
    } = props

    const [isClicked, setIsClicked] = useState(false);

    const onClickHandler = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000);
    };

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItem, [location === item.path ? cls.active : undefined], { [cls.clicked]: isClicked })}
            onClick={onClickHandler}
        >
            {location === item.path ? <item.ActiveIcon className='icon' /> : <item.Icon className='icon' />}
            <div className={cls.label}>
                {item.label}
            </div>
        </AppLink>
    )
}