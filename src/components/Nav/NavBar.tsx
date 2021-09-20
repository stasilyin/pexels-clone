import React, {useEffect, useState} from 'react'
import logo  from '../../img/logo.svg'

type navBarType = {
    visible?: boolean
}
const NavBar: React.FC<navBarType> = ({visible}) => {
    const [changeColorNav, setChangeColorNav] = useState<boolean>(false)

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 120) {
            setChangeColorNav(true)
        } else {
            setChangeColorNav(false)
        }
    }
    console.log(window.scrollY)

        window.addEventListener("scroll", changeBackgroundNavbar)


    return (
        <nav className={`fixed ${(!changeColorNav) ? 'bg-transparent' : 'bg-gray-100 animate-fade'} h-66px 
                        flex justify-center items-center text-xl w-full top-0 z-50`}
            style={{backgroundColor: visible ? '#232a34' : ''}}
        >
            <div className={'w-90'}>
                <a href='/' className={'flex items-center'}>
                    <img src={logo} alt={'logo'} />
                    <span className={`ml-3 hidden lg:block text-white`}>Pexels</span>
                </a>
            </div>

        </nav>
    )

}

export default NavBar