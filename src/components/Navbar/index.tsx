import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.svg'
import IconeMenu from '../../assets/images/icon-menu.svg'
import Menu from '../Menu'
import { useEffect, useState } from 'react'

export default function Navbar() {
    const [openModalAdicionarAdministrador, setOpenModalAdicionarAdministrador] = useState(false)

    return (
        <div className="flex flex-wrap justify-between items-center py-4">
            <div>
                <img src={Logo} />
            </div>
            <div className="flex items-center">
                <button 
                    id='menu'
                    data-collapse-toggle="navbar-default"
                    type='button'
                    className='hidden mobile:block'
                    onClick={() => {
                        setOpenModalAdicionarAdministrador(true)
                      }}
          
                >
                    <img src={IconeMenu} />
                </button>
                <div className='mobile:hidden'>
                    <NavLink
                        to=''
                        className='m-2 hover:text-[#FFCE8A]'
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to=''
                        className='m-2 hover:text-[#FFCE8A]'
                    >
                        New
                    </NavLink>

                    <NavLink
                        to=''
                        className='m-2 hover:text-[#FFCE8A]'
                    >
                        Popular
                    </NavLink>

                    <NavLink
                        to=''
                        className='m-2 hover:text-[#FFCE8A]'
                    >
                        Trending
                    </NavLink>

                    <NavLink
                        to=''
                        className='m-2 hover:text-[#FFCE8A]'
                    >
                        Categories
                    </NavLink>
                </div>
            </div>
            <Menu
            isOpen={openModalAdicionarAdministrador}
            setModalOpen={() => setOpenModalAdicionarAdministrador(!openModalAdicionarAdministrador)}
    
            >
                

            </Menu>
        </div>
    )
}