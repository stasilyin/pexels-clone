import React, {useEffect, useState} from 'react'
import logo  from '../../img/logo.svg'
import SearchInput from "../SearchInput/SearchInput";

type navBarType = {
    visible?: boolean
    val?:string
}
const NavBar: React.FC<navBarType> = ({visible, val}) => {
    const [changeColorNav, setChangeColorNav] = useState<boolean>(false)

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 120) {
            setChangeColorNav(true)
        } else {
            setChangeColorNav(false)
        }
    }

    window.addEventListener("scroll", changeBackgroundNavbar)


    return (
        <nav className={`fixed ${(!changeColorNav) ? 'bg-transparent' : 'bg-gray-100'} h-66px 
                        flex justify-center items-center text-xl w-full top-0 z-50`
            }
            style={{backgroundColor: visible ? '#232a34' : ''}}
        >
            <div className={'w-90 flex items-center'}>
                <a href='/' className={'flex mr-3 items-center'}>
                    <img src={logo} alt={'logo'} />
                    <span className={`ml-3 hidden lg:block text-white`}>Pexels</span>
                </a>
                <SearchInput styleInput='w-3/5' visible={(visible || changeColorNav)} val={val}/>
            </div>

        </nav>
    )

}

export default NavBar