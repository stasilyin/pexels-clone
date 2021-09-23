import React, {useState} from 'react'

import SearchInput from "../SearchInput/SearchInput"

import {ReactComponent as Ru} from "../../img/icon/ru.svg"
import {ReactComponent as En} from "../../img/icon/en.svg"
import logo  from '../../img/logo.svg'
import strings from "../../locales/localization";
import {useDispatch} from "react-redux";
import {changeLanguagesAction} from "../../store/action-creators/changeLanguagesAction";

type navBarType = {
    visible?: boolean
    val?:string
}

const NavBar: React.FC<navBarType> = ({visible, val}) => {
    const [changeColorNav, setChangeColorNav] = useState<boolean>(false)
    const btnText = strings.const.titles

    const dispatch = useDispatch()

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 120) {
            setChangeColorNav(true)
        } else {
            setChangeColorNav(false)
        }
    }

    window.addEventListener("scroll", changeBackgroundNavbar)

    const setLanguageEn = () => {
        strings.setLanguage('en')
        dispatch(changeLanguagesAction('en'))
    }
    const setLanguageRu = () => {
        strings.setLanguage('ru')
        dispatch(changeLanguagesAction('ru'))
    }

    return (
        <nav className={`fixed ${(!changeColorNav) ? 'bg-transparent' : 'bg-gray-100'} h-66px 
                        flex justify-center items-center text-xl w-full top-0 px-3 z-50`
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
            <div className='flex justify-center items-center'>
                <Ru
                    className='w-8 h-8 mr-3'
                    title={btnText.ruBtn}
                    onClick={setLanguageRu}
                />
                <En
                    className='w-8 h-8'
                    title={btnText.engBtn}
                    onClick={setLanguageEn}
                />
            </div>

        </nav>
    )
}

export default NavBar