interface ModalProps {
    isOpen: boolean
    setModalOpen: (response: any) => void
    children: React.ReactNode
}


export default function Menu({ isOpen, setModalOpen, children }: ModalProps) {
    if (isOpen) {
        return (
            <>
            {children}
            </>
        )
    }
}