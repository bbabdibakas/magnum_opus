import { AppModal } from 'shared/ui/AppModal/AppModal'
import AuthForm from '../AuthForm/AuthForm'

interface AuthModalProps {
    className?: string
    isModalOpen: boolean
    onClose: () => void
}

export const AuthModal = (props: AuthModalProps) => {
    const {
        className,
        isModalOpen,
        onClose
    } = props

    return (
        <AppModal isModalOpen={isModalOpen} onClose={onClose} className={className}>
            <AuthForm />
        </AppModal>
    )
}