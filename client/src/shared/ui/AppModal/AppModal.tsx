import { classNames } from 'shared/lib/classNames/classNames'
import { AppButton, AppButtonTheme } from '../AppButton/AppButton'
import { AppPortal } from '../AppPortal/AppPortal'
import cls from './AppModal.module.scss'
import { ReactNode } from 'react'
import CancelIcon from 'shared/assets/icons/Cancel.svg'

interface AppModalProps {
    children: ReactNode
    className?: string
    isModalOpen: boolean
    onClose: () => void
}

export const AppModal = (props: AppModalProps) => {
    const {
        children,
        className,
        isModalOpen,
        onClose
    } = props

    const onModalClose = () => {
        onClose()
    }

    return (
        <AppPortal>
            <div className={classNames(cls.AppModal, [className], { [cls.opened]: isModalOpen })}>
                <div className={cls.overlay}>
                    <div className={cls.content}>
                        <div className={cls.header}>
                            <AppButton onClick={onModalClose} theme={AppButtonTheme.CLEAR} className={cls.button}>
                                <CancelIcon className='icon' />
                            </AppButton>
                        </div>
                        <div className={cls.body}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppPortal >
    )
}