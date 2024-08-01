import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'
import { ReactNode, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

interface AppLinkProps extends LinkProps {
    children: ReactNode
    className?: string
    animationClassName?: string
}

export const AppLink = (props: AppLinkProps) => {
    const {
        children,
        className,
        animationClassName,
        to,
        ...otherProps
    } = props

    const [isClicked, setIsClicked] = useState(false);

    const onClickHandler = () => {
        if (animationClassName) {
            setIsClicked(true);
        }
        setTimeout(() => setIsClicked(false), 1000);
    };

    return (
        <Link
            to={to}
            onClick={onClickHandler}
            className={classNames(cls.AppLink, [className], { [animationClassName]: isClicked })}
            {...otherProps}
        >
            {children}
        </Link>
    )
}