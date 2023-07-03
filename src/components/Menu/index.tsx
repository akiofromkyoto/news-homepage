import IconeMenuClose from '../../assets/images/icon-menu-close.svg'

interface ModalProps {
    isOpen: boolean
    setModalOpen: (response: any) => void
    children: React.ReactNode
}

export default function Menu({ isOpen, setModalOpen, children }: ModalProps) {
    if (isOpen) {
        return (
            <div className="absolute bg-white w-[60%] h-full top-0 right-0">
                <div className='flex justify-end'>
                    <button
                        id='menu'
                        type='button'
                        className='px-5 py-2.5 right-0 top-0'
                        onClick={setModalOpen}
                    >
                        <img src={IconeMenuClose} />
                    </button>
                </div>

                <div className="flex flex-col items-start text-xl mt-20">
                    <button className="py-2 px-5">Home</button>
                    <button className="py-2 px-5">New</button>
                    <button className="py-2 px-5">Popular</button>
                    <button className="py-2 px-5">Trending</button>
                    <button className="py-2 px-5">Categories</button>
                </div>
                {children}
            </div>
        )
    }
}