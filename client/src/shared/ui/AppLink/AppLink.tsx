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


    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}