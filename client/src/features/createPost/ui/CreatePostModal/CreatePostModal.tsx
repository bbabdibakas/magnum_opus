import { AppModal } from 'shared/ui/AppModal/AppModal'
import CreatePostForm from '../CreatePostForm/CreatePostForm'

interface CreatePostModalProps {
    className?: string
    isModalOpen: boolean
    onClose: () => void
}

export const CreatePostModal = (props: CreatePostModalProps) => {
    const {
        className,
        isModalOpen,
        onClose
    } = props

    return (
        <AppModal isModalOpen={isModalOpen} onClose={onClose} className={className}>
            <CreatePostForm />
        </AppModal>
    )
}