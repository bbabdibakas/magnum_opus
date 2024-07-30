import cls from './Navbar.module.scss'
import { ReactNode } from "react"

interface NavbarProps {
    children?: ReactNode
}

export const Navbar = ({ children }: NavbarProps) => {
    return (
        <div className={cls.Navbar}>
            {children}
        </div>
    )
}