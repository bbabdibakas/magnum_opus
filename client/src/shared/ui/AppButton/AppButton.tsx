import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppButton.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export enum AppButtonTheme {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINED = 'outlined'
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: AppButtonTheme
}

export const AppButton = (props: AppButtonProps) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    )
}