import React, {useEffect, useState} from 'react'
import logo  from '../../../img/logo.svg'

const NavBar: React.FC = () => {
    const [changeColorNav, setChangeColorNav] = useState<boolean>(false)

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 120) {
            setChangeColorNav(false)
        } else {
            setChangeColorNav(true)
        }
    }

    window.addEventListener("scroll", changeBackgroundNavbar)

    return (
        <nav className={`fixed ${changeColorNav ? 'bg-transparent' : 'bg-gray-100 animate-fade'} h-66px 
                        flex justify-center items-center text-xl w-full top-0 z-50`}>
            <div className={'w-90'}>
                <a href='/'  className={'flex items-center'}>
                    <img src={logo} alt={'logo'} />
                    <span className={`ml-3 hidden lg:block text-white`}>Pexels</span>
                </a>
            </div>

        </nav>
    )

}

export default NavBar